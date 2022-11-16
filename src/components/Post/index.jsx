import { Comment } from '../Comment';
import css from './Post.module.css';

export function Post() {
  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <img
            className={css.avatar}
            src="https://placekitten.com/200/200"
            alt="avatar"
          />
          <div className={css.authorInfo}>
            <strong>John Doe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="2022-11-15T00:00:00.000Z"
          dateTime="Mon, 15 Nov 2022 00:00:00 GMT"
        >
          1 hour ago
        </time>
      </header>
      <div className={css.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#"> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
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
