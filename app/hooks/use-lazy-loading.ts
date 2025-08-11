import { useState, useEffect, useCallback } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useLazyLoading<T extends HTMLElement>(
  options: UseLazyLoadingOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<T | null>(null);

  const { threshold = 0.1, rootMargin = '50px', root = null } = options;

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    []
  );

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, root, handleIntersection]);

  return { ref: setRef, isVisible };
}

// Hook para lazy loading de imagens
export function useLazyImage() {
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              setIsLoaded(true);
            }
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef]);

  return { imageRef: setImageRef, isLoaded };
}

// Hook para debounce de scroll para performance
export function useScrollThrottle(callback: () => void, delay: number = 16) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        callback();

        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, delay);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [callback, delay, isScrolling]);

  return isScrolling;
}

// Hook para preload de recursos críticos
export function usePreloadResources(resources: string[]) {
  useEffect(() => {
    resources.forEach((resource) => {
      if (resource.endsWith('.css')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
      } else if (resource.endsWith('.js')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = resource;
        document.head.appendChild(link);
      } else if (resource.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      }
    });
  }, [resources]);
} 