import Link from 'next/link';
import React, { FC, HTMLProps } from 'react';
import { UrlObject } from 'url';
import { TypePage } from '@types';
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
    page?: TypePage;
    query?: { [key: string]: string };
    anchorLink?: string;
    slugQueryParam?: string;
} & LinkProps &
    HTMLProps<HTMLAnchorElement>;

const getHref = ({
    page,
    anchorLink,
    slugQueryParam,
}: {
    page?: TypePage;
    anchorLink?: string;
    slugQueryParam?: string;
}) => {
    if (anchorLink) {
        return anchorLink;
    }
    if (page) {
        const { slug } = page.fields;
        const pageType = page.fields.content.sys.contentType.sys.id;
        const prefix = getUrlByPageType({ pageType, slug });
        const pathname = `${prefix}${slug}`;
        return { pathname, query: { slug: slugQueryParam } };
    }
    return '#';
};

const LinkWrapper: FC<LinkWrapperPropTypes> = ({
    page,
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

    const href = getHref({ page, anchorLink, slugQueryParam });

    return (
        <Link as={as} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow} href={href}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
