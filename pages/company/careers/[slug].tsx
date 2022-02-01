import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCareer } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import TextMarkdown from '@components/TextMarkdown';
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
                <div className="container relative">
                    <div className="py-10 mx-6 md:mx-0 md:py-28">
                        <div className="block lg:grid lg:grid-cols-14 lg:gap-8">
                            <div className="col-span-6 col-start-5">
                                <TextMarkdown text={description} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerPage;
