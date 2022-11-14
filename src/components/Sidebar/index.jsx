import { PencilLine } from "phosphor-react";
import css from "./Sidebar.module.css";

const imageURL = "https://source.unsplash.com/random/300x100";
const avatarURL = "https://i.pravatar.cc/400"


export function Sidebar() {
  return (
      <aside className={css.sidebar}>
          <img clasName={css.cover} src={imageURL} alt="sidebar" />
          <div className={css.profile}>
              <img className={css.avatar} src={avatarURL} alt="avatar" />
              <strong>John Doe</strong>
              <span>Web Developer</span>
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