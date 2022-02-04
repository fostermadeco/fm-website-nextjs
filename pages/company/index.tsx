import React from 'react';
import { TypePage, TypePageLanding } from '@types';
import { getPage } from '@api';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { GetStaticProps } from 'next';
import Layout from '@components/Layout';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const page = await getPage({
        pageContentType: PageContentTypes.Landing,
        slug: 'company',
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
    const content = page.fields.content as TypePageLanding;
    const { sections = [], pageIntro = {} } = content.fields;

    return (
        <Layout preview={preview} navMode="light">
            <div>
                <PageHead page={page} />
                <BlockRenderer block={pageIntro} />
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default CompanyPage;
