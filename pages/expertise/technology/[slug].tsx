import { GetServerSideProps } from 'next';
import React from 'react';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageTechnology } from '@types';
import { PageContentTypes } from '@constants';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params = {} } = context;
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Technology,
        slug,
    });

    return {
        props: {
            page,
        },
    };
};

const TechnologyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageTechnology;
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

export default TechnologyPage;
