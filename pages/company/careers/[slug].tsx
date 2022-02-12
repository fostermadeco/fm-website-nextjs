import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePageCareer } from '@types';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import TextMarkdownCentered from '@components/TextMarkdownCentered';
import CtaFullSimple from '@components/renderer/CtaFullSimple';
import { getPage, getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
    const allCareerPages = await getPagesOfType({ pageContentType: PageContentTypes.Career });

    const paths = allCareerPages.map((page) => ({ params: { slug: page.fields.slug } })) ?? [];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Career,
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

const CareerPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ TypePageCareer: page });

    const content = page.fields.content as TypePageCareer;
    const { heroImage, pageIntroDetail, description, ctaBottom } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntroDetail && <PageIntroDetail fields={pageIntroDetail.fields} page={page} />}
                <BlockRenderer block={heroImage} />
                {description && <TextMarkdownCentered textBlock={description} />}
                {ctaBottom && <CtaFullSimple fields={ctaBottom.fields} />}
            </div>
        </Layout>
    );
};

export default CareerPage;
