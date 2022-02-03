import React from 'react';
import Head from 'next/head';
import { PreviewBanner } from '@components/PreviewBanner';
import MainNav from './MainNav';

const Layout = (props: { preview: boolean; children: JSX.Element | JSX.Element[] }) => {
    const { preview, children } = props;
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
            </Head>
            <div className="">
                <PreviewBanner preview={preview} />
                <MainNav />
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
