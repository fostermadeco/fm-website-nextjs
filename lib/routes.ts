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
    if (slug === 'home') {
        return {
            href: '/',
            as: `/`,
        };
    }
    switch (pageType) {
        case PageContentTypes.Landing: {
            return {
                href: '/[slug]',
                as: `/${slug}`,
            };
        }
        case PageContentTypes.LandingNoImage: {
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
                href: '/services/service/[slug]',
                as: `/services/service/${slug}`,
            };
        }
        case PageContentTypes.Technology: {
            return {
                href: '/services/technology/[slug]',
                as: `/services/technology/${slug}`,
            };
        }
        case PageContentTypes.Industry: {
            return {
                href: '/services/industry/[slug]',
                as: `/services/industry/${slug}`,
            };
        }
        case PageContentTypes.CaseStudy: {
            return {
                href: '/case-studies/[slug]',
                as: `/case-studies/${slug}`,
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
            return { href: '/services', label: 'Services' };
        }
        case PageContentTypes.Industry: {
            return { href: '/services', label: 'Services' };
        }
        case PageContentTypes.Service: {
            return { href: '/services', label: 'Services' };
        }
        case PageContentTypes.CaseStudy: {
            return { href: '/case-studies', label: 'Case Studies' };
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
