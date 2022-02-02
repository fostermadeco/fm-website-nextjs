import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: PageContentTypes.Company,
        slug: 'apply',
    });

    return {
        props: {
            page,
        },
    };
}

const ApplyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <>
            <MainNav mode="dark" />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default ApplyPage;
