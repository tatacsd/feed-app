import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import css from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={css.comment}>
      <Avatar hasBorders={false} src="https://placekitten.com/200/200" />
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
            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Like comment">
            <ThumbsUp size={20} />
            Claps
            <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
