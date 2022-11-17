import { ImgHTMLAttributes } from 'react';
import css from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorders?: boolean;
}

export function Avatar({ hasBorders = true, ...rest }: AvatarProps) {
  return (
    <img className={hasBorders ? css.avatarWithBorder : css.avatar} {...rest} />
  );
}
