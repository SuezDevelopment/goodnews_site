import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';

const baseUrl = "https://goodnewscooperativesociety.online";

interface SeoMetaData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const RootLayout: NextPage<PropsWithChildren<SeoMetaData>> = memo(({ 
  children, 
  title, 
  description = "GoodNews Cooperative Society empowers members with affordable financial services, tailored savings plans, accessible loans, and comprehensive financial education. Join us to build a secure and prosperous future through community-driven cooperative banking.",
  keywords = "GoodNews, Cooperative, Thrift, Credit, Society, financial services, savings, loans, financial education, secure future,community banking, financial empowerment, member-owned, affordable loans, savings accounts, financial literacy, cooperative finance, mutual aid, economic development, community investment, ethical banking, microfinance, dividend payments, financial inclusion, sustainable finance, credit union alternative, cooperative principles, financial wellness, community-driven banking, wealth building",
  ogImage = `${baseUrl}/og-image.jpg`
}) => {
  const { asPath: pathname } = useRouter();
  const fullUrl = `${baseUrl}${pathname}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={fullUrl}
        openGraph={{
          url: fullUrl,
          title,
          description,
          images: [{ url: ogImage }],
          site_name: 'GoodNews Cooperative Society',
        }}
        twitter={{
          handle: '@goodnewscoop',
          site: '@goodnewscoop',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#14411a" />
      </Head>
      <main lang="en">
        {children}
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GoodNews Cooperative Society",
          "url": baseUrl,
          "logo": `${baseUrl}/goodnews-logo.png`,
          "sameAs": [
            "https://www.facebook.com/goodnewscoop",
            "https://twitter.com/goodnewscoop",
            "https://www.linkedin.com/company/goodnewscoop"
          ]
        })
      }} />
    </>
  )
});

RootLayout.displayName = 'RootLayout';
export default RootLayout;