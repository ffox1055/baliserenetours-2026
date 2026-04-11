import { Head, usePage } from "@inertiajs/react";

const FALLBACK_BASE_URL = "https://baliserenetours.com";

const DEFAULT_DESCRIPTION =
  "Bali Serene Tours – premium Bali airport transfers, daily car rentals, and guided tours.";

interface SeoHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robots?: string;
  jsonLd?: Record<string, unknown>;
}

export function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  ogImage,
  canonicalUrl,
  robots = "index, follow",
  jsonLd,
}: SeoHeadProps) {
  const { url, props } = usePage<{ siteUrl?: string }>();
  const baseUrl = (props.siteUrl ?? FALLBACK_BASE_URL).replace(/\/$/, "");
  const pageUrl = `${baseUrl}${url}`;

  return (
    <Head title={title}>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Bali Serene Tours" />
      <meta property="og:locale" content="en_US" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Head>
  );
}
