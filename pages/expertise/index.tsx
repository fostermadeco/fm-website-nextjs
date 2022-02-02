import React from 'react';
import { getPage } from '@api';
import MainNav from '@components/MainNav';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageLanding } from '@types';
import { PageContentTypes } from '@constants';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: PageContentTypes.Landing,
        slug: 'expertise',
    });

    return {
        props: {
            page,
        },
    };
}

const ExpertisePage = ({ page }: { page: TypePage }) => {
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

export default ExpertisePage;
