import { GetServerSideProps } from 'next';
import React from 'react';
import { getPage } from '../../../api/api';
import MainNav from '../../../components/MainNav';
import { PageHead } from '../../../components/PageHead';
import PageIntroDetail from '../../../components/renderer/PageIntroDetail';
import BlockRenderer from '../../../components/renderer/BlockRenderer';
import { TypePage, TypePageIndustry } from '../../../lib/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log({ context });

    const { params = {} } = context;
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: 'pageIndustry',
        slug,
    });

    return {
        props: {
            page,
        },
    };
};

// export const getServerSideProps = withLocale(async (locale, { params, query }) => {
//     const slug = String(params.slug);
//     const preview = isPreviewEnabled(query);
//     const pageContentType = PageContentTypes.HelpDeskArticle;
//     const [page, otherPages] = await Promise.all([
//       getPage({ slug, preview, locale, pageContentType }),
//       getPagesOfType({ preview, locale, pageContentType }),
//     ]);

//     return {
//       props: { page, otherPages },
//     };
//   });

const IndustryPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageIndustry;
    const { sections = [], pageIntroDetail, parentPage } = content.fields;

    return (
        <>
            <MainNav />
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail block={pageIntroDetail} parent={parentPage} />
                <BlockRenderer block={sections} />
            </div>
        </>
    );
};

export default IndustryPage;
