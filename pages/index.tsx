import React from 'react';
import { TypePage, TypePageLandingNoImage } from '@types';
import { getPage } from '@api';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { PageContentTypes } from '@constants';
import { GetStaticProps } from 'next';
import Layout from '@components/Layout';
import PageIntroCircle from '@components/PageIntroCircle';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const page = await getPage({
        pageContentType: PageContentTypes.LandingNoImage,
        slug: 'home',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
};

const HomePage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    const content = page.fields.content as TypePageLandingNoImage;
    const { sections = [], pageIntro } = content.fields;
    console.log(sections);
    return (
        <Layout preview={preview}>
            <div>
                <PageHead page={page} />
                {pageIntro && <PageIntroCircle fields={pageIntro.fields} />}
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default HomePage;
