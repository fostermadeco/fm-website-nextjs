import React from 'react';
import getPage from '../../api/api';
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
        <>
            <div>Welcome to {page.fields.title}</div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </>
    );
};

export default CompanyPage;
