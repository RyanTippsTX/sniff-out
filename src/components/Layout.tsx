import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import * as siteMeta from '~/global';

export default function Layout({
  children,
  pageMeta,
}: {
  children: React.ReactNode | React.ReactNode[];
  pageMeta?: {
    pageTitle?: string;
    pageDescription?: string;
    photoUrl?: string;
    pageUrl?: string;
  };
}) {
  return (
    <>
      <Head>
        <title>{pageMeta?.pageTitle || siteMeta.title}</title>
        <meta name='description' content={pageMeta?.pageDescription || siteMeta.description} />
        {/* Open Graph protocol: https://ogp.me/#types */}
        <meta name='og:title' content={pageMeta?.pageTitle || siteMeta.title} />
        <meta name='og:type' content='website' />
        <meta name='og:image' content={pageMeta?.photoUrl || siteMeta.favicon} />
        <meta name='og:url' content={pageMeta?.pageUrl || siteMeta.url} />

        <meta name='og:description' content={pageMeta?.pageDescription || siteMeta.description} />
        <meta name='og:site_name' content={siteMeta.title} />

        {/* Trick to use an emoji as favicon: */}
        <link rel='icon' href={siteMeta.favicon} />
        <link rel='apple-touch-icon' href={siteMeta.favicon} />
      </Head>
      <header className='sticky top-0 z-10'>
        <Navbar />
      </header>
      {/* <main className='flex min-h-screen flex-col items-center justify-center '> */}
      <main className=''>
        <div className='container mx-auto'>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
