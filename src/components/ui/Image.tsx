import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '', onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default Image;
