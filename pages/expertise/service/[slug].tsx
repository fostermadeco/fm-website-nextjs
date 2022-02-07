import { GetServerSideProps } from 'next';
import React from 'react';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageService } from '@types';
import { PageContentTypes } from '@constants';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params = {} } = context;
    const slug = String(params.slug);

    const page = await getPage({
        pageContentType: PageContentTypes.Service,
        slug,
    });

    return {
        props: {
            page,
        },
    };
};

const ServicePage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageService;
    const { sections = [], pageIntroDetail } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} page={page} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default ServicePage;
