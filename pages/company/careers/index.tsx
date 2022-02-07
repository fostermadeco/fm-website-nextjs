import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { getPage, getPagesOfType } from '@api';
import Layout from '@components/Layout';

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
    const [page, careers] = await Promise.all([
        await getPage({
            pageContentType: PageContentTypes.Company,
            slug: 'careers',
            preview,
        }),
        await getPagesOfType({ pageContentType: PageContentTypes.Career }),
    ]);

    console.log('getStaticProps');

    console.log({ careers });

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
    console.log('CareersPage!!!');

    console.log({ page, careers, sections });

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default CareersPage;
