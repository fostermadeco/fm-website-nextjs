import React from 'react';
import { getPage } from '@api';
import { PageHead } from '@components/PageHead';
import { TypePage, TypePageContact } from '@types';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';
import PageIntroSimple from '@components/renderer/PageIntroSimple';
import ImageWithPartialOverlayWithSlots from '@components/ImageWithPartialOverlayWithSlots';
import Form from '@components/renderer/Form';

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
    const { pageIntro = {}, heroImage, overline, headerText, form, paragraphText } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntro && <PageIntroSimple fields={pageIntro.fields} page={page} />}
                <ImageWithPartialOverlayWithSlots
                    fields={{ image: heroImage, overline, headerText, paragraphText }}
                    componentRight={<Form fields={form.fields} />}
                />
            </div>
        </Layout>
    );
};

export default ContactPage;
