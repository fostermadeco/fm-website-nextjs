import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PageContentTypes } from '@constants';
import { getPage, getPagesOfType } from '@api';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageIndustry } from '@types';
import Layout from '@components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
    const allPageForType = await getPagesOfType({ pageContentType: PageContentTypes.Industry });
    const paths = allPageForType.map((page) => ({ params: { slug: page.fields.slug } })) ?? [];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Industry,
        slug,
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
};

const IndustryPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageIndustry;
    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntroDetail && <PageIntroDetail fields={pageIntroDetail.fields} page={page} />}
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default IndustryPage;
