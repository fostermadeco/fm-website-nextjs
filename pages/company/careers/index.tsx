import { GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import CareersProvider from 'context/CareersContext';
import { PageContentTypes } from '@constants';
import { getPage, getPagesOfType } from '@api';
import Layout from '@components/Layout';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const [careers, page] = await Promise.all([
        await getPagesOfType({ pageContentType: PageContentTypes.Career }),
        await getPage({
            pageContentType: PageContentTypes.Company,
            slug: 'careers',
            preview,
        }),
    ]);

    return {
        props: {
            page,
            careers,
            preview,
        },
    };
};

// use TypePage instead of TypePageCareer for careers so it can be used in links
const CareersPage = ({ page, careers = [], preview }: { page: TypePage; careers: TypePage[]; preview: boolean }) => {
    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail, parentPage } = content.fields;
    console.log({ page, careers });

    return (
        <CareersProvider careers={careers}>
            <Layout preview={preview}>
                <div className="pt-40">
                    <PageHead page={page} />
                    <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                    <BlockRenderer block={sections} />
                </div>
            </Layout>
        </CareersProvider>
    );
};

export default CareersPage;
