import { createClient } from 'contentful';
import { PageContentType } from '@constants';
import { parsePage } from 'lib/pageParsers';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const previewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
    host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

// will this work with array of strings?
type GetPageBySlugProps = {
    slug: string | string[];
    preview?: boolean;
};

export const getPageBySlug = async (props: GetPageBySlugProps) => {
    const { slug, preview = false } = props;
    const query = {
        limit: 1,
        include: 10,
        locale: 'en-US',
        'fields.slug': slug,
        content_type: 'page',
        // 'fields.content.sys.contentType.sys.id': 'pageCompany',
    };

    const {
        items: [page],
    } = await getClient(preview).getEntries(query);
    return page || null;
};

type GetPageProps = {
    pageContentType: string;
    slug: string;
    preview?: boolean;
};

export const getPage = async (props: GetPageProps) => {
    const { slug, pageContentType, preview = false } = props;
    const query = {
        limit: 1,
        include: 10,
        locale: 'en-US',
        'fields.slug': slug,
        content_type: 'page',
        'fields.content.sys.contentType.sys.id': pageContentType,
    };
    const {
        items: [page],
    } = await getClient(preview).getEntries(query);
    return page || null;
};

type GetPagesOfTypeProps = {
    pageContentType: string;
    preview?: boolean;
};

export const getPagesOfType = async (props: GetPagesOfTypeProps) => {
    const { pageContentType, preview = false } = props;

    const { items: pages } = await getClient(preview).getEntries({
        limit: 100,
        include: 10,
        content_type: PageContentType as string,
        'fields.content.sys.contentType.sys.id': pageContentType,
    });

    return pages ? pages.map((page) => parsePage(page)) : [];
};
