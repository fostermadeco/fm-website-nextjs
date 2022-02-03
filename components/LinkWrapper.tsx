/* eslint-disable no-nested-ternary */
import Link, { LinkProps as NextLinkProps } from 'next/link';
import React, { FC, HTMLProps } from 'react';
import { TypePage } from '@types';
import useNavigation from 'hooks/useNavigation';
import { getUrlByPageType } from '../lib/constants';

export interface LinkToPropsTypes {
    href: string;
    as?: string;
}

type LinkCustomPropTypes = {
    page?: TypePage;
    path?: string;
    hrefProp?: string;
    query?: { [key: string]: string };
    anchorLink?: string;
    slugQueryParam?: string;
};

// remove href from types so we can use our own href prop because href is required
// and this will build it based on if there is a page, path or pass through href
type LinkWrapperPropTypes = LinkCustomPropTypes & Omit<NextLinkProps, 'href'> & HTMLProps<HTMLAnchorElement>;

const getHref = ({
    page,
    path,
    anchorLink,
    slugQueryParam,
}: {
    page?: TypePage;
    path?: string;
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

// https://www.benmvp.com/blog/wrapping-next-link-custom-ui-link-component/
const LinkWrapper: FC<LinkWrapperPropTypes> = (props) => {
    const { href: hrefProp = '#', page, path, anchorLink, slugQueryParam, query = {}, children, ...rest } = props;

    const { linkTo, linkToPath } = useNavigation();
    console.log({ linkTo, linkToPath });
    const linkToProps: LinkToPropsTypes = path ? linkToPath(path) : page ? linkTo(page) : { href: hrefProp };

    return (
        <Link {...rest} {...linkToProps}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
