import { useState } from "react";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export default function Avatar({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src || avatarPlaceholder);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(avatarPlaceholder)}
    />
  );
}
