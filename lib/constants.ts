export const pageMap = {
    pageService: '/expertise/service/',
    pageIndustry: '/expertise/industry/',
    pageTechnology: '/expertise/technology/',
    pageCompany: '/company/',
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
