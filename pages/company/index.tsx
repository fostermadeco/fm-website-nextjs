import React from 'react';
import getPage from '../../api/api';
import callContentful from '../../api/ContentfulApi';
import GET_LANDING_PAGES from '../../api/queries/landingPages.graph';

export async function getStaticProps() {
    // const response = await callContentful(GET_LANDING_PAGES);

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

const CompanyPage = ({ page }) => {
    console.log({ page });

    return <div>Welcome to Next.js!</div>;
};

export default CompanyPage;
