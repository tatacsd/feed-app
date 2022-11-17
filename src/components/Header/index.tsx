import logo from "../../assets/logo.svg";
import css from "./Header.module.css";

export function Header() {
  return (
    <header className={css.header}>
      <img src={logo} alt="logo" />
      <strong >Ignite Feed</strong>
    </header>
  );
}