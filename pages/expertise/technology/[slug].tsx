import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getPage, getPagesOfType } from '@api';
import { PageHead } from '@components/PageHead';
import BlockPageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageTechnology } from '@types';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
    const allPageForType = await getPagesOfType({ pageContentType: PageContentTypes.Technology });
    const paths = allPageForType.map((page) => ({ params: { slug: page.fields.slug } })) ?? [];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Technology,
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

const TechnologyPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageTechnology;
    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntroDetail && <BlockPageIntroDetail block={pageIntroDetail} page={page} />}
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default TechnologyPage;
