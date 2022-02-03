import { PageContentTypes } from '@constants';
import { TypePage } from '@types';
import { isPreviewEnabled, withPreviewParam } from 'lib/preview';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

declare type Url = string | UrlObject;
interface LinkProps {
    href: string;
    as: string;
}

const linkToPage = ({ page, isPreview }: { page: TypePage; isPreview: boolean }): LinkProps => {
    const { slug } = page.fields;
    const pageType = page.fields.content?.sys.contentType.sys.id;

    switch (pageType) {
        case PageContentTypes.Landing: {
            return {
                href: withPreviewParam('/[slug]', isPreview),
                as: withPreviewParam(`/${slug}`, isPreview),
            };
        }
        case PageContentTypes.Company: {
            return {
                href: withPreviewParam('/company/[slug]', isPreview),
                as: withPreviewParam(`/company/${slug}`, isPreview),
            };
        }
        case PageContentTypes.Career: {
            return {
                href: withPreviewParam('/company/careers/[slug]', isPreview),
                as: withPreviewParam(`/company/careers/${slug}`, isPreview),
            };
        }
        case PageContentTypes.Service: {
            return {
                href: withPreviewParam('/expertise/service/[slug]', isPreview),
                as: withPreviewParam(`/expertise/service/${slug}`, isPreview),
            };
        }
        case PageContentTypes.Technology: {
            return {
                href: withPreviewParam('/expertise/technology/[slug]', isPreview),
                as: withPreviewParam(`/expertise/technology/${slug}`, isPreview),
            };
        }
        case PageContentTypes.Industry: {
            return {
                href: withPreviewParam('/expertise/industry/[slug]', isPreview),
                as: withPreviewParam(`/expertise/industry/${slug}`, isPreview),
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
    const { query, asPath: currentPath, route } = useRouter();

    const isPreview = isPreviewEnabled(query);

    const linkTo = (page: TypePage) => linkToPage({ page, isPreview });

    const linkToPath = (url: string): LinkProps => ({
        href: withPreviewParam(`/${url}`, isPreview),
        as: withPreviewParam(`/${url}`, isPreview),
    });

    const isActive = (page: TypePage) => {
        const active = normalizePath(currentPath);
        const target = normalizePath(linkTo(page).as);

        return target === active;
    };

    return { currentPath, route, linkTo, linkToPath, isActive, isPreview };
};

export default useNavigation;
