import '../styles/app.css';
// import 'tailwindcss/tailwind.css';
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { PreviewBanner } from '@components/PreviewBanner';
import Footer from '@components/Footer';
import MainNav from '../components/MainNav';

function FosterMadeWebsiteApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
            </Head>
            <div className="">
                <PreviewBanner />
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default FosterMadeWebsiteApp;
