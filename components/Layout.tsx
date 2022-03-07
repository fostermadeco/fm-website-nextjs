import React from 'react';
import Head from 'next/head';
import { PreviewBanner } from '@components/PreviewBanner';
import MainNav from './MainNav';
import AnimationFadeIn from './AnimationFadeIn';
import { SmoothScroll } from './SmoothScroll';

type LayoutProps = {
    preview: boolean;
    children: JSX.Element | JSX.Element[];
    navMode?: 'dark' | 'light';
};

const Layout = (props: LayoutProps) => {
    const { preview, children, navMode = 'dark' } = props;
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
                <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
            </Head>
            <AnimationFadeIn>
                <SmoothScroll>
                    <PreviewBanner preview={preview} />
                    <MainNav mode={navMode} />
                    <main className="content-container">{children}</main>
                </SmoothScroll>
            </AnimationFadeIn>
        </>
    );
};

export default Layout;
