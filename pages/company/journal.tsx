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
        slug: 'journal',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
};

const JournalPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageLandingNoImage;
    const { sections = [], pageIntro } = content.fields;
    console.log({ pageIntro });

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

export default JournalPage;
