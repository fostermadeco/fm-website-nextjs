import Link from 'next/link';
import React from 'react';
import * as Contentful from 'contentful';
import { TypePageFields } from '../lib/types';
import { getUrlByPageType, pageMap } from '../lib/constants';

type LinkWrapperPropTypes = {
    link: Contentful.Entry<TypePageFields>;
    children: JSX.Element;
};

const LinkWrapper = (props: LinkWrapperPropTypes) => {
    console.log('LinkWrapper');
    console.log({ props });
    const { link, children } = props;

    if (!link) return null;

    const { slug } = link.fields;
    const pageType = link.fields.content.sys.contentType.sys.id;
    const prefix = getUrlByPageType({ pageType, slug });

    return <Link href={`${prefix}${slug}`}>{children}</Link>;
};

export default LinkWrapper;
