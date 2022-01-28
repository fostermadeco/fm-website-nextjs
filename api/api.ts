import { createClient } from 'contentful';

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

type GetPagesParams = {
    pageContentType: string;
};

export const getPages = async (params: GetPagesParams) => {
    const query = {
        limit: 100,
        include: 10,
        locale: 'en-US',
        content_type: 'page',
        'fields.content.sys.contentType.sys.id': params.pageContentType,
    };
    const { items } = await client.getEntries(query);
    return items || null;
};
