import Head from "next/head";

const SITE = {
  title: "Sam Sadtler",
  description:
    "My portfolio site to give you a sense of who I am when it comes to technology, coding and sense of humor",
  author: "@samsadtler",
};

export default function SEO({ title, description }) {
  const metaDescription = description || SITE.description;
  const fullTitle = title ? `${title} | ${SITE.title}` : SITE.title;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || SITE.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={SITE.author} />
      <meta name="twitter:title" content={title || SITE.title} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
}
