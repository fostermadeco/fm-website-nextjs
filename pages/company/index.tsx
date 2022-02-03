import React from 'react';
import { TypePage, TypePageLanding } from '@types';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { isPreviewEnabled } from 'lib/preview';
import { GetServerSideProps } from 'next';

export const getStaticProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const preview = isPreviewEnabled(query);
    const page = await getPage({
        pageContentType: PageContentTypes.Landing,
        slug: 'company',
        preview,
    });

    return {
        props: {
            page,
        },
    };
};

const CompanyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageLanding;
    const { sections = [], pageIntro = {} } = content.fields;

    return (
        <>
            <MainNav mode="light" />
            <div>
                <PageHead page={page} />
                <BlockRenderer block={pageIntro} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default CompanyPage;
