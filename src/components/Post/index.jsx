import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import css from './Post.module.css';

export function Post({ author, content, publishedAt }) {
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

  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <Avatar src={author.avatarURL} />
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
        {content.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={index}>{item.content}</p>;
            case 'anchor':
              return (
                <p>
                  <a key={index} href={item.content}>
                    {item.content}
                  </a>
                </p>
              );
            case 'hashtag':
              return <span key={index}>{item.content}</span>;
            default:
              return null;
          }
        })}
      </div>

      <form className={css.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Write your comment here" />
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={css.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
