import css from './Avatar.module.css';

interface AvatarProps {
  src: string;
  hasBorders?: boolean;
  alt: string;
}

export function Avatar({ src, hasBorders = true, alt }: AvatarProps) {
  return (
    <img
      className={hasBorders ? css.avatarWithBorder : css.avatar}
      src={src}
      alt={alt}
    />
  );
}
