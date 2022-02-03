import React from 'react';
import { TypePage, TypePageLanding } from '@types';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = () => ({
    paths: ['/company/careers', '/company/value', '/company/apply'],
    fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
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
