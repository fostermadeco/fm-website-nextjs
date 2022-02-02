import React from 'react';
import { TypePage, TypePageLanding } from '@types';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: 'pageLanding',
        slug: 'company',
    });

    return {
        props: {
            page,
        },
    };
}

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
