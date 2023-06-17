import { NextSeo } from 'next-seo';

const SEO = ({ title, description, ogTitle, ogDescription, ogImageUrl }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: ogTitle,
        description: ogDescription,
        images: [
          {
            url: ogImageUrl,
            alt: 'Image Alt Text',
          },
        ],
      }}
    />
  );
};

export default SEO;
