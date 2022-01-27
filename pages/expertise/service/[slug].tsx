import { GetServerSideProps } from 'next';
import React from 'react';
import getPage from '../../../api/api';
import MainNav from '../../../components/MainNav';
import { PageHead } from '../../../components/PageHead';
import PageIntroDetail from '../../../components/PageIntroDetail';
import BlockRenderer from '../../../components/renderer/BlockRenderer';
import { TypePage, TypePageService } from '../../../lib/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params = {} } = context;
    const slug = String(params.slug);
    console.log({ slug });

    const page = await getPage({
        pageContentType: 'pageService',
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
    const { sections = [] } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={content} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default ServicePage;
