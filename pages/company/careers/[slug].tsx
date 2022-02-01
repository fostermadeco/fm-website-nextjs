import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCareer } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import TextMarkdownCentered from '@components/TextMarkdownCentered';
import CtaFullSimple from '@components/renderer/CtaFullSimple';
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
    console.log({ TypePageCareer: page });

    const content = page.fields.content as TypePageCareer;
    const { heroImage, pageIntroDetail, description, ctaBottom } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} />
                <BlockRenderer block={heroImage} />
                <TextMarkdownCentered textBlock={description} />
                {ctaBottom && <CtaFullSimple fields={ctaBottom.fields} />}
            </div>
        </>
    );
};

export default CareerPage;
