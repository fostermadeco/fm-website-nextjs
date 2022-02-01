import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCareer } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import TextMarkdown from '@components/TextMarkdown';
import TextMarkdownCentered from '@components/TextMarkdownCentered';
import { getPage } from '../../../api/api';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params = {} } = context;
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: 'pageCareer',
        slug,
    });

    return {
        props: {
            page,
        },
    };
};

const CareerPage = ({ page }: { page: TypePage }) => {
    const content = page.fields.content as TypePageCareer;
    const { heroImage, pageIntroDetail, description } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} />
                <BlockRenderer block={heroImage} />
                <TextMarkdownCentered textBlock={description} />
            </div>
        </>
    );
};

export default CareerPage;
