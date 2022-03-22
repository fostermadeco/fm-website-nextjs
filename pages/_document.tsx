import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import CtaNewsletter from '@components/CtaNewsletter';
import Footer from '../components/Footer';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <CtaNewsletter />
                    <Footer />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
