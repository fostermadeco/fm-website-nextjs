export const PageContentType = 'page';

export const PageContentTypes = {
    Career: 'pageCareer',
    Landing: 'pageLanding',
    Company: 'pageCompany',
    Industry: 'pageIndustry',
    Technology: 'pageTechnology',
    Service: 'pageService',
};

export const pageMap = {
    pageService: '/expertise/service/',
    pageIndustry: '/expertise/industry/',
    pageTechnology: '/expertise/technology/',
    pageCompany: '/company/',
    pageCareer: '/company/careers/',
};

type UrlByPageTypeTypeProps = {
    pageType: string;
    slug: string;
};

export const getUrlByPageType = ({ pageType, slug }: UrlByPageTypeTypeProps) => {
    const prefix = pageMap[pageType as keyof typeof pageMap];
    if (prefix) {
        return prefix;
    }
    if (pageType === 'pageLanding') {
        return `/${slug}`;
    }
    console.error('URL not accounted for');
    return '#';
};
