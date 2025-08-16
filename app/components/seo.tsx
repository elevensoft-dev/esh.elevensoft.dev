import { useEffect } from 'react';

import { generateMetaTags, generateStructuredData, type SEOConfig } from '~/lib/seo';

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

export function SEO({ children, ...config }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update meta tags
    const metaTags = generateMetaTags(config);

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name], meta[property]');
    existingMetaTags.forEach(tag => {
      if (tag.getAttribute('name') && !['viewport', 'charset'].includes(tag.getAttribute('name')!)) {
        tag.remove();
      }
      if (tag.getAttribute('property')) {
        tag.remove();
      }
    });

    // Add new meta tags
    metaTags.forEach(metaTag => {
      const meta = document.createElement('meta');
      if (metaTag.name) {
        meta.setAttribute('name', metaTag.name);
      }
      if (metaTag.property) {
        meta.setAttribute('property', metaTag.property);
      }
      meta.setAttribute('content', metaTag.content);
      document.head.appendChild(meta);
    });

    // Add structured data
    const existingStructuredData = document.querySelectorAll('script[type="application/ld+json"]');
    existingStructuredData.forEach(script => script.remove());

    const structuredData = generateStructuredData(config);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.url || window.location.href);

  }, [config]);

  return <>{children}</>;
}

// Componente específico para páginas
export function PageSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  children
}: SEOProps) {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      image={image}
      url={url}
      type={type}
    >
      {children}
    </SEO>
  );
}

// Componente específico para artigos/blog
export function ArticleSEO({
  title,
  description,
  keywords,
  image,
  url,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  children
}: SEOProps) {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      image={image}
      url={url}
      type="article"
      author={author}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      section={section}
      tags={tags}
    >
      {children}
    </SEO>
  );
}
