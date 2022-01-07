import React from 'react';
import getPage from '../../api/api';
import PageIntro from '../../components/PageIntro';
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
    const { sections = [], pageIntro = {} } = content.fields;

    return (
        <div className="mx-auto">
            <BlockRenderer block={pageIntro} />
            <BlockRenderer block={sections} />
        </div>
    );
};

export default CompanyPage;
