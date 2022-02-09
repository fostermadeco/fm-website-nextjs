import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { getPage, getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
    const allCompanyPages = await getPagesOfType({ pageContentType: PageContentTypes.Company });
    // if a page has its own template, remove it
    const pagesInTemplate = ['careers', 'apply'];
    const slugs = allCompanyPages.map((page) => page.fields.slug);
    const filteredSlugs = slugs.filter((slug) => !pagesInTemplate.includes(slug));
    const paths = filteredSlugs.map((slug) => ({ params: { slug } })) ?? [];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Company,
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

const CompanyPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    const content = page.fields.content as TypePageCompany;

    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntroDetail && <PageIntroDetail block={pageIntroDetail} page={page} />}
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default CompanyPage;
