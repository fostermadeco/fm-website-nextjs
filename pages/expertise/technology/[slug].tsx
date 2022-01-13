import { GetServerSideProps } from 'next';
import React from 'react';
import getPage from '../../../api/api';
import { PageHead } from '../../../components/PageHead';
import PageIntroDetail from '../../../components/PageIntroDetail';
import BlockRenderer from '../../../components/renderer/BlockRenderer';
import { TypePage, TypePageTechnology } from '../../../lib/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log({ context });

    const { params = {} } = context;
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: 'pageTechnology',
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

const TechnologyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    const content = page.fields.content as TypePageTechnology;
    const { sections = [] } = content.fields;

    return (
        <div className="mx-auto">
            <PageHead page={page} />
            <BlockRenderer block={sections} />
        </div>
    );
};

export default TechnologyPage;
