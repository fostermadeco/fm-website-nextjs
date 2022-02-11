import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePagePerson } from '@types';
import { PageHead } from '@components/PageHead';
import { PageIntroDetail } from '@components/renderer/PageIntroDetail';
import { getPage, getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
    const allPageForType = await getPagesOfType({ pageContentType: PageContentTypes.Person });
    const paths = allPageForType.map((page) => ({ params: { slug: page.fields.slug } })) ?? [];

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
    const slug = String(params.slug);
    const page = await getPage({
        pageContentType: PageContentTypes.Person,
        slug,
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
};

const TeamPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    const content = page.fields.content as TypePagePerson;

    const { person } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroDetail
                    overline="Our Team"
                    headerText={`${person.fields.firstName} ${person.fields.lastName}`}
                    headerParagraph={person.fields.jobTitle}
                    page={page}
                />
            </div>
        </Layout>
    );
};

export default TeamPage;
