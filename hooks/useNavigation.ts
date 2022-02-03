import { PageContentTypes } from '@constants';
import { TypePage } from '@types';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

declare type Url = string | UrlObject;
interface LinkProps {
    href: string;
    as: string;
}

const linkToPage = ({ page }: { page: TypePage }): LinkProps => {
    const { slug } = page.fields;
    const pageType = page.fields.content?.sys.contentType.sys.id;

    switch (pageType) {
        case PageContentTypes.Landing: {
            return {
                href: '/[slug]',
                as: `/${slug}`,
            };
        }
        case PageContentTypes.Company: {
            return {
                href: '/company/[slug]',
                as: `/company/${slug}`,
            };
        }
        case PageContentTypes.Career: {
            return {
                href: '/company/careers/[slug]',
                as: `/company/careers/${slug}`,
            };
        }
        case PageContentTypes.Service: {
            return {
                href: '/expertise/service/[slug]',
                as: `/expertise/service/${slug}`,
            };
        }
        case PageContentTypes.Technology: {
            return {
                href: '/expertise/technology/[slug]',
                as: `/expertise/technology/${slug}`,
            };
        }
        case PageContentTypes.Industry: {
            return {
                href: '/expertise/industry/[slug]',
                as: `/expertise/industry/${slug}`,
            };
        }
        default: {
            throw new Error(`Page type is not supported yet: ${pageType}`);
        }
    }
};

const normalizePath = (path: string | Url) => {
    // eslint-disable-next-line no-nested-ternary
    const text = typeof path === 'string' ? path : path.pathname;
    // strip query params & trailing slashes
    return text ? text.replace(/\?.*/, '').replace(/\/$/, '') : text;
};

const useNavigation = () => {
    const { asPath: currentPath, route } = useRouter();

    const linkTo = (page: TypePage) => linkToPage({ page });

    const linkToPath = (url: string): LinkProps => ({
        href: `/${url}`,
        as: `/${url}`,
    });

    const isActive = (page: TypePage) => {
        const active = normalizePath(currentPath);
        const target = normalizePath(linkTo(page).as);

        return target === active;
    };

    return { currentPath, route, linkTo, linkToPath, isActive };
};

export default useNavigation;
