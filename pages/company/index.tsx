import React from 'react';
import getPage from '../../api/api';
import { PageHead } from '../../components/PageHead';
import BlockRenderer from '../../components/renderer/BlockRenderer';
import { TypePage } from '../../lib/types';
import { TypePageLanding } from '../../lib/types/TypePageLanding';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: 'pageLanding',
        slug: 'company',
    });

    return {
        props: {
            page,
        },
    };
}

const CompanyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageLanding;
    const { sections = [], pageIntro = {}, slideshow } = content.fields;

    return (
        <div className="mx-auto">
            <PageHead page={page} />
            <BlockRenderer block={pageIntro} />
            <BlockRenderer block={sections} />
            <BlockRenderer block={slideshow} />
            <h1 className="h1">Eight core values guide everything that we do. </h1>
            <h2 className="h2">Eight core values guide everything that we do. </h2>
            <h3 className="h3">Eight core values guide everything that we do. </h3>
            <h4 className="h4">Eight core values guide everything that we do. </h4>
            <h5 className="h5">Eight core values guide everything that we do. </h5>
        </div>
    );
};

export default CompanyPage;
