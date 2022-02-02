import { createClient } from 'contentful';
import { PageContentType } from '@constants';
import { TypePage } from '@types';
import { parsePage } from 'lib/pageParsers';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

type GetPageParams = {
    pageContentType: string;
    slug: string;
    // locale?: string;
};

export const getPage = async (params: GetPageParams) => {
    const query = {
        limit: 1,
        include: 10,
        locale: 'en-US',
        'fields.slug': params.slug,
        content_type: 'page',
        'fields.content.sys.contentType.sys.id': params.pageContentType,
    };
    const {
        items: [page],
    } = await client.getEntries(query);
    return page || null;
};

type GetPagesOfTypeParams = {
    pageContentType: string;
    preview?: boolean;
};

// TODO: add preview
export const getPagesOfType = async (params: GetPagesOfTypeParams) => {
    const { pageContentType } = params;

    const { items: pages } = await client.getEntries({
        limit: 100,
        content_type: PageContentType as string,
        'fields.content.sys.contentType.sys.id': pageContentType,
    });

    return pages ? pages.map((page) => parsePage(page)) : [];
};
