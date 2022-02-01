import Link from 'next/link';
import React, { FC, HTMLProps } from 'react';
import * as Contentful from 'contentful';
import { UrlObject } from 'url';
import { TypePageFields } from '../lib/types';
import { getUrlByPageType } from '../lib/constants';

// modified LinkProps from 'next/link' so href is optional
declare type Url = string | UrlObject;
type LinkProps = {
    href?: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
};

type LinkWrapperPropTypes = {
    link?: Contentful.Entry<TypePageFields>;
    query?: { [key: string]: string };
    anchorLink: string;
    slugQueryParam: string;
} & LinkProps &
    HTMLProps<HTMLAnchorElement>;

const getHref = ({
    link,
    anchorLink,
    slugQueryParam,
}: {
    link?: Contentful.Entry<TypePageFields>;
    anchorLink: string;
    slugQueryParam: string;
}) => {
    if (anchorLink) {
        return anchorLink;
    }
    if (link) {
        const { slug } = link.fields;
        const pageType = link.fields.content.sys.contentType.sys.id;
        const prefix = getUrlByPageType({ pageType, slug });
        const pathname = `${prefix}${slug}`;
        return { pathname, query: { slug: slugQueryParam } };
    }
    return '#';
};

const LinkWrapper: FC<LinkWrapperPropTypes> = ({
    link,
    anchorLink,
    slugQueryParam,
    query = {},
    as,
    children,
    replace,
    scroll,
    shallow,
    passHref,
    ...rest
}) => {
    // console.log({ props });
    // const { link, children } = props;

    const href = getHref({ link, anchorLink, slugQueryParam });

    return (
        <Link as={as} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow} href={href}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
