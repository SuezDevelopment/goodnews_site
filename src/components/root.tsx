import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';
import { seoMetaData } from '@/data/data';

const baseUrl = "https://goodnewscooperativesociety.online"

const RootLayout: NextPage<PropsWithChildren<SeoMetaData>> = memo(({ children, title, description }) => {
    const router = useRouter();
    const { asPath: pathname } = useRouter();
    return (
        <>
            <Head>
                <NextSeo
                    title={title}
                    themeColor={'#14411a'}
                    noindex={false}
                    nofollow={false}
                    robotsProps={undefined}

                    description={description}
                    canonical={`${baseUrl}${pathname}`}
                    openGraph={{
                        type: 'website',
                        title: `${title}`,
                        description: `${description}`,
                        images: [
                            {
                                url: 'https://example.com/og-image-01.jpg',
                                width: 800,
                                height: 600,
                                alt: 'Og Image Alt',
                            },
                            {
                                url: 'https://example.com/og-image-02.jpg',
                                width: 900,
                                height: 800,
                                alt: 'Og Image Alt Second',
                            },
                        ],
                    }} twitter={{

                    }} additionalMetaTags={[
                        {
                            name: 'icon',
                            content: '/favicon.ico'
                        },
                        {
                            name: 'manifest',
                            content: '/site.webmanifest',
                        },
                        {
                            name: 'apple-touch-icon',
                            content: '/apple-touch-icon.png'
                        }
                    ]}
                    titleTemplate="GoodNews %s - Cooperative Thrift & Credit Society"
                    defaultTitle={'GoodNews - Cooperative Thrift & Credit Society'}
                    additionalLinkTags={[
                        {
                            rel: 'manifest',
                            href: '/site.webmanifest',
                          },
                          {
                            rel: 'icon',
                            sizes: '16x16',
                            href: '/favicon-16x16.png',
                          },{
                            rel: 'icon',
                            sizes: '32x32',
                            href: '/favicon-32x32.png',
                          },{
                            rel: 'icon',
                            sizes: '32x32',
                            href: '/favicon-32x32.png',
                          },
                    ]}
                />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
});

RootLayout.displayName = 'RootLayout';
export default RootLayout;