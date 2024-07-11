import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';

const baseUrl = "https://goodnewscooperativesociety.online"

const RootLayout: NextPage<PropsWithChildren<SeoMetaData>> = memo(({ children, title, description }) => {
    const { asPath: pathname } = useRouter();
    return (
        <div>
            <Head>
            <title>{title}</title>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="keywords" content="GoodNews, Cooperative, Thrift, Credit, Society, financial services, savings, loans, financial education, secure future" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href={`${baseUrl}${pathname}`} />
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
});

RootLayout.displayName = 'RootLayout';
export default RootLayout;