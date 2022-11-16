import css from './Avatar.module.css';

export function Avatar({ src, hasBorders = true }) {
  return (
    <img
      className={hasBorders ? css.avatarWithBorder : css.avatar}
      src={src}
      alt="avatar"
    />
  );
}
