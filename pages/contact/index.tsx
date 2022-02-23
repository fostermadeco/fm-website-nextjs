import React from 'react';
import { getPage } from '@api';
import { PageHead } from '@components/PageHead';
import BlockRenderer from '@components/renderer/BlockRenderer';
import { TypePage, TypePageContact, TypePageLanding } from '@types';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';
import PageIntroSimple from '@components/renderer/PageIntroSimple';

export async function getStaticProps({ preview = false }) {
    const page = await getPage({
        pageContentType: PageContentTypes.Contact,
        slug: 'contact',
        preview,
    });

    return {
        props: {
            page,
            preview,
        },
    };
}

const ContactPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageContact;
    const { pageIntro = {} } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                <PageIntroSimple fields={pageIntro.fields} page={page} />
            </div>
        </Layout>
    );
};

export default ContactPage;
