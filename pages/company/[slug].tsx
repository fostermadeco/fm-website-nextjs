import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany, TypePageJob } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { getPage, getPages } from '../../api/api';

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log({ context });

    const { params = {} } = context;
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: 'pageCompany',
        slug,
    });

    return {
        props: {
            page,
        },
    };
};

const CompanyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail, parentPage } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default CompanyPage;
