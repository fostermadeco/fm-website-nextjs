import { GetServerSideProps } from 'next';
import React from 'react';
import { TypePage, TypePageCompany } from '@types';
import { PageHead } from '@components/PageHead';
import MainNav from '@components/MainNav';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import BlockRenderer from '@components/renderer/BlockRenderer';
import CareersProvider from 'context/CareersContext';
import { PageContentTypes } from '@constants';
import { getPage, getPagesOfType } from '@api';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const [page, careers] = await Promise.all([
        await getPage({
            pageContentType: PageContentTypes.Company,
            slug: 'careers',
        }),
        await getPagesOfType({ pageContentType: PageContentTypes.Career }),
    ]);

    return {
        props: {
            page,
            careers,
        },
    };
};

// use TypePage instead of TypePageCareer for careers so it can be used in links
const CareersPage = ({ page, careers = [] }: { page: TypePage; careers: TypePage[] }) => {
    const content = page.fields.content as TypePageCompany;
    const { sections = [], pageIntroDetail, parentPage } = content.fields;
    console.log({ careers });

    return (
        <CareersProvider careers={careers}>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                <BlockRenderer block={sections} />
            </div>
        </CareersProvider>
    );
};

export default CareersPage;
