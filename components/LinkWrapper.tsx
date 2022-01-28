import Link from 'next/link';
import React from 'react';
import * as Contentful from 'contentful';
import { TypePageFields } from '../lib/types';

type LinkWrapperPropTypes = {
    link: Contentful.Entry<TypePageFields>;
    children: JSX.Element;
};

const pageMap = {
    pageLanding: '/',
    pageService: '/expertise/service/',
    pageIndustry: '/expertise/industry/',
    pageTechnology: '/expertise/technology/',
};

const LinkWrapper = (props: LinkWrapperPropTypes) => {
    console.log('LinkWrapper');
    console.log({ props });
    const { link, children } = props;

    if (!link) return null;

    const { slug } = link.fields;
    const pageType = link.fields.content.sys.contentType.sys.id;
    const prefix = pageMap[pageType as keyof typeof pageMap];

    return <Link href={`${prefix}${slug}`}>{children}</Link>;
};

export default LinkWrapper;
