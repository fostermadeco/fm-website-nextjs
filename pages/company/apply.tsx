import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export async function getStaticProps({ preview = false }) {
    const page = await getPage({
        pageContentType: PageContentTypes.Company,
        slug: 'apply',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
}

const ApplyPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page, preview });

    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} />
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default ApplyPage;
