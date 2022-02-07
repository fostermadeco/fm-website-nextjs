import React from 'react';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageLanding } from '@types';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export async function getStaticProps({ preview = false }) {
    const page = await getPage({
        pageContentType: PageContentTypes.Landing,
        slug: 'expertise',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
}

const ExpertisePage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageLanding;
    const { sections = [], pageIntro = {} } = content.fields;

    return (
        <Layout preview={preview} navMode="light">
            <div>
                <PageHead page={page} />
                <BlockRenderer block={pageIntro} />
                <BlockRenderer block={sections} />
            </div>
        </Layout>
    );
};

export default ExpertisePage;
