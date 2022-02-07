/* eslint-disable no-nested-ternary */
import Link, { LinkProps as NextLinkProps } from 'next/link';
import React, { FC, HTMLProps } from 'react';
import { TypePage } from '@types';
import useNavigation from 'hooks/useNavigation';

export interface LinkToPropsTypes {
    href: string;
    as?: string;
}

type LinkCustomPropTypes = {
    page?: TypePage;
    hrefProp?: string;
    linkPath?: string;
};

// remove href from types so we can use our own href prop because href is required
// and this will build it based on if there is a page, path or pass through href
type LinkWrapperPropTypes = LinkCustomPropTypes & Omit<NextLinkProps, 'href'> & HTMLProps<HTMLAnchorElement>;

// when would you pass in a path and not an href?
// page: pageType mapped to url
// path: gets preview url
// href: is just a pass through
const LinkWrapper: FC<LinkWrapperPropTypes> = (props) => {
    console.log({ props });

    const { href: hrefProp = '#', page, children, ...rest } = props;

    const { linkTo } = useNavigation();
    const linkToProps: LinkToPropsTypes = page ? linkTo(page) : { href: hrefProp };

    console.log({ linkToProps });

    return (
        <Link {...rest} {...linkToProps}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
