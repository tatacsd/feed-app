import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import css from './Post.module.css';

export interface Content {
  type: 'paragraph' | 'anchor' | 'hashtag';
  content: string;
  href?: string;
}

export interface PostProps {
  id?: number;
  author: {
    name: string;
    avatarURL: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
}

export function Post({ id, author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Nice post!']);
  const [newComment, setNewComment] = useState('');
  const publisheDateFormatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  const publishedAtFormatted = format(publishedAt, "d, LLL 'at' HH:mm'h'");

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  const handleCommentContentChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
    event.target.setCustomValidity('');
  };

  const handleCreateComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  };

  const deleteComment = (comment: string) => {
    const commentsWithoutDeleted = comments.filter((c) => c !== comment);
    setComments(commentsWithoutDeleted);
  };

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('Please enter a comment');
  };

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <Avatar src={author.avatarURL} alt={author.name} />
          <div className={css.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publisheDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>
      <div className={css.content}>
        {content.map((item) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={item.content}>{item.content}</p>;
            case 'anchor':
              return (
                <p key={item.content}>
                  <a href={item.href} target="_blank">
                    👉 {item.content}
                  </a>
                </p>
              );
            case 'hashtag':
              return (
                <span key={item.content} className={css.displayInline}>
                  {item.content}
                </span>
              );
            default:
              return null;
          }
        })}
      </div>

      <form className={css.commentForm} onSubmit={handleCreateComment}>
        <strong>Leave a comment</strong>
        <textarea
          name="comment"
          placeholder="Write your comment here"
          value={newComment}
          onChange={handleCommentContentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Post
          </button>
        </footer>
      </form>

      <div className={css.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
