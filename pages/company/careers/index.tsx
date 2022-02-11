import { GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import { PageHead } from '@components/PageHead';
import BlockPageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { getPage } from '@api';
import Layout from '@components/Layout';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const page = await getPage({
        pageContentType: PageContentTypes.Company,
        slug: 'careers',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
};

const CareersPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail } = content.fields;

    console.log({ page, sections });

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

export default CareersPage;
