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
    const { sections = [], pageIntro = {}, slideshow, cta = {} } = content.fields;

    return (
        <div className="mx-auto">
            <PageHead page={page} />
            <BlockRenderer block={pageIntro} />
            <BlockRenderer block={sections} />
            <BlockRenderer block={slideshow} />
        </div>
    );
};

export default CompanyPage;
