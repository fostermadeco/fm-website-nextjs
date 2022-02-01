import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany, TypePageCareer } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import CareersProvider from 'context/CareersContext';
import { getPage, getPages } from '../../../api/api';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const page = await getPage({
        pageContentType: 'pageCompany',
        slug: 'careers',
    });

    const jobs = await getPages({ pageContentType: 'pageCareer' });

    return {
        props: {
            page,
            jobs,
        },
    };
};

const CareersPage = ({ page, jobs = [] }: { page: TypePage; jobs: TypePageCareer[] }) => {
    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail, parentPage } = content.fields;

    return (
        <CareersProvider careers={jobs}>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                <BlockRenderer block={sections} />
            </div>
        </CareersProvider>
    );
};

export default CareersPage;
