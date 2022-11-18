import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import css from './Sidebar.module.css';

// const imageURL = 'https://source.unsplash.com/random/800x150';
const imageURL =
  'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80';
const avatarURL = 'https://github.com/tatacsd.png';

export function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <img className={css.cover} src={imageURL} alt="sidebar" />
      <div className={css.profile}>
        <Avatar src={avatarURL} />
        <strong>Thays Casado</strong>
        <span>Fullstack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
