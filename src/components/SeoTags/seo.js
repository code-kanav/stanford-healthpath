import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords = "",
  author = "",
  canonicalUrl = "",
  ogTitle,
  ogDescription,
  ogImage = "",
  ogUrl = "",
  twitterCardType = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = "",
  lang = "en",
}) => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* Language and Charset */}
      <meta charSet="UTF-8" />
      <html lang={lang} />
    </Helmet>
  );
};

export default SEO;
