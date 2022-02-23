import { PageContentTypes } from '@constants';
import { TypePage } from './types/TypePage';

type GetUrlByPageTypeProps = {
    // TODO: how to make this one of PageContentTypes
    pageType: string;
    slug: string;
};

interface LinkProps {
    href: string;
    as: string;
}

const getUrlByPageType = (props: GetUrlByPageTypeProps): LinkProps => {
    const { pageType, slug } = props;
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
        case PageContentTypes.Contact: {
            return {
                href: '/contact',
                as: `/contact`,
            };
        }
        case PageContentTypes.Person: {
            return {
                href: '/company/team/[slug]',
                as: `/company/team/${slug}`,
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

export const getLinkToParent = ({ page }: { page: TypePage }): { href: string; label: string } => {
    const pageType = page.fields.content?.sys.contentType.sys.id;
    switch (pageType) {
        case PageContentTypes.Company: {
            return { href: '/company', label: 'Company' };
        }
        case PageContentTypes.Person: {
            return { href: '/company/team', label: 'Our Team' };
        }
        case PageContentTypes.Career: {
            return { href: '/company/careers', label: 'Careers' };
        }
        case PageContentTypes.Technology: {
            return { href: '/expertise', label: 'Expertise' };
        }
        case PageContentTypes.Industry: {
            return { href: '/expertise', label: 'Expertise' };
        }
        case PageContentTypes.Service: {
            return { href: '/expertise', label: 'Expertise' };
        }

        default: {
            console.log(`Parent not set for page type: ${pageType}`);
            return { href: '#', label: '' };
        }
    }
};

export const getLinkToForPage = ({ page }: { page: TypePage }): LinkProps => {
    const { slug } = page.fields;
    const pageType = page.fields.content?.sys.contentType.sys.id;

    return getUrlByPageType({ pageType, slug });
};
