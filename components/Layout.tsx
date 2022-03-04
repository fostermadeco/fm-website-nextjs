import React from 'react';
import Head from 'next/head';
import { PreviewBanner } from '@components/PreviewBanner';
import { motion } from 'framer-motion';
import MainNav from './MainNav';

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
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
            >
                <PreviewBanner preview={preview} />
                <MainNav mode={navMode} />
                <main>{children}</main>
            </motion.div>
        </>
    );
};

export default Layout;
