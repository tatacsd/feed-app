import { HandsClapping, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import css from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [claps, setClaps] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleClaping = () => {
    setClaps(claps + 1);
  };

  return (
    <div className={css.comment}>
      <Avatar
        hasBorders={false}
        src="https://unsplash.it/200/200?random=1"
        alt="Avatar"
      />
      <div className={css.commentBox}>
        <div className={css.commentContent}>
          <header>
            <div className={css.authorAndTime}>
              <strong>John Doe</strong>
              <time
                title="Mon, 15 Feb 2021 12:00:00 GMT"
                dateTime="2021-02-15T12:00:00.000Z"
              >
                15 Feb 2021
              </time>
            </div>
            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Like comment" onClick={handleClaping}>
            <HandsClapping size={20} />
            Claps
            <span>{claps}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
