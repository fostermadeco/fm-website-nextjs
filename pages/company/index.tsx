import Image from 'next/image';
import React from 'react';
import getPage from '../../api/api';
import PageIntro from '../../components/pageIntro';
import { TypePage } from '../../lib/types';

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

    return (
        <div className="mx-auto">
            <PageIntro pageIntro={page.fields.content.fields.pageIntro} />
        </div>
    );
};

export default CompanyPage;
