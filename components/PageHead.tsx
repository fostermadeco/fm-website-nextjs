import React from 'react';
import Head from 'next/head';

import { TypePage } from '../lib/types';

type PageHeadProps = {
    page: TypePage;
};

// TODO: keywords are not coming through from contentful
export const PageHead = ({ page }: PageHeadProps) => {
    if (!page || !page.fields.seo) return null;

    const seo = page.fields.seo.fields;

    const { description = '', keywords = [], title = page.fields.title } = seo;
    const robots = [
        seo.no_index === true ? 'noindex' : undefined,
        seo.no_follow === true ? 'nofollow' : undefined,
    ].filter((x) => x !== undefined);

    return (
        <Head>
            <title>{title} | Foster Made</title>
            {robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}
            {description.trim() !== '' && <meta name="description" content={description} key="description" />}
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(',')} />}
        </Head>
    );
};
