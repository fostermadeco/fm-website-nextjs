import React from 'react';
import getPage from '../../api/api';
import MainNav from '../../components/MainNav';
import { PageHead } from '../../components/PageHead';
import BlockRenderer from '../../components/renderer/BlockRenderer';
import { TypePage } from '../../lib/types';
import { TypePageLanding } from '../../lib/types/TypePageLanding';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: 'pageLanding',
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
