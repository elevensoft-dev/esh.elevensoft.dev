import React, { useState } from 'react';
import { useLazyImage } from '~/hooks/use-lazy-loading';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMjIyMjIyIi8+CjxwYXRoIGQ9Ik0yMCAyMEg4MFY4MEgyMFYyMFoiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const { imageRef, isLoaded: isLazyLoaded } = useLazyImage();

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Se é prioridade alta, carrega imediatamente
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
    );
  }

  // Lazy loading para imagens não prioritárias
  return (
    <img
      ref={imageRef}
      src={placeholder}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
      style={{
        transition: 'opacity 0.3s ease-in-out',
        ...(hasError && { filter: 'grayscale(100%)' })
      }}
    />
  );
}

// Componente específico para imagens de hero/banner
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      className={`${props.className} w-full h-auto object-cover`}
    />
  );
}

// Componente para imagens de conteúdo
export function ContentImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      className={`${props.className} max-w-full h-auto`}
    />
  );
}

// Componente para thumbnails
export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      className={`${props.className} w-20 h-20 object-cover rounded-lg`}
    />
  );
} 