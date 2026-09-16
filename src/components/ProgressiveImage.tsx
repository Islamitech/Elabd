import React, { useState } from 'react';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  wrapperClassName = '',
  className = '',
  alt = '',
  onLoad,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`progressive-image ${loaded ? 'is-loaded' : ''} ${wrapperClassName}`}>
      <span className="progressive-image-skeleton" aria-hidden="true" />
      <img
        {...props}
        alt={alt}
        className={`${className} progressive-image-media`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </span>
  );
};
