export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  key?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function generateMetaTags(config: SEOConfig): MetaTag[] {
  const {
    title,
    description,
    keywords,
    image = '/og-image.jpg',
    url = 'https://esh.elevensoft.dev',
    type = 'website',
    author = 'Eleven Soft',
    publishedTime,
    modifiedTime,
    section,
    tags
  } = config;

  const metaTags: MetaTag[] = [
    // Meta tags básicas
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords || 'acesso remoto, segurança, servidores, SSH, auditoria, infraestrutura, DevOps, SRE' },
    { name: 'author', content: author },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'canonical', content: url },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'ESH - Eleven Soft' },
    { property: 'og:locale', content: 'pt_BR' },
    
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: '@elevensoft' },
    
    // Schema.org structured data
    { name: 'application-name', content: 'ESH' },
    { name: 'theme-color', content: '#f97316' },
    { name: 'msapplication-TileColor', content: '#f97316' },
    
    // Additional meta tags for better SEO
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'ESH' },
  ];

  // Add article-specific meta tags if type is article
  if (type === 'article') {
    if (publishedTime) {
      metaTags.push({ property: 'article:published_time', content: publishedTime });
    }
    if (modifiedTime) {
      metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    }
    if (section) {
      metaTags.push({ property: 'article:section', content: section });
    }
    if (tags) {
      tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }
  }

  return metaTags;
}

export function generateStructuredData(config: SEOConfig) {
  const {
    title,
    description,
    image = '/og-image.jpg',
    url = 'https://esh.elevensoft.dev',
    type = 'website',
    author = 'Eleven Soft',
    publishedTime,
    modifiedTime
  } = config;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebSite',
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    "publisher": {
      "@type": "Organization",
      "name": "Eleven Soft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://esh.elevensoft.dev/logo.webp"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://esh.elevensoft.dev/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  if (type === 'article') {
    return {
      ...baseStructuredData,
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "headline": title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };
  }

  return baseStructuredData;
} 