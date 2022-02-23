import React from 'react';
import { getPage } from '@api';
import { PageHead } from '@components/PageHead';
import { TypePage, TypePageContact } from '@types';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';
import PageIntroSimple from '@components/renderer/PageIntroSimple';
import ImageWithPartialOverlayWithSlots from '@components/ImageWithPartialOverlayWithSlots';
import Form from '@components/renderer/Form';
import TextMarkdown from '@components/TextMarkdown';
import * as Contentful from 'contentful';
import SocialLinkIcon from '@components/SocialLinkIcon';

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

export interface ComponentLeftProps {
    overline: Contentful.EntryFields.Symbol;
    headerText: Contentful.EntryFields.Symbol;
    socialLinks?: Contentful.EntryFields.Symbol[];
}

const ComponentLeft = ({ overline, headerText, socialLinks }: ComponentLeftProps) => (
    <>
        <h2 className="h5 overline">{overline}</h2>
        <h3 className="h3">{headerText}</h3>
        <div>
            <h4 className="mt-6 h4">
                <a className="border-b-on" href="tel:18042913999">
                    +1 804 291 3999
                </a>
            </h4>
            <h4 className="mt-6 h4">
                <a className="border-b-on" href="mailto:hello@fostermade.co">
                    hello@fostermade.co
                </a>
            </h4>
            <h4 className="mt-6 h4">
                <a
                    className="border-b-on"
                    href="https://www.google.com/maps/place/Foster+Made/@37.5426455,-77.4409035,17z/data=!4m12!1m6!3m5!1s0x89b1110f90a1ab8f:0xd4cc3bb48e585cd0!2sFoster+Made!8m2!3d37.5426455!4d-77.4387148!3m4!1s0x89b1110f90a1ab8f:0xd4cc3bb48e585cd0!8m2!3d37.5426455!4d-77.4387148?hl=en-US"
                >
                    404 East Grace Street
                </a>
                <span className="block mt-1" />
                <a
                    className="border-b-on"
                    href="https://www.google.com/maps/place/Foster+Made/@37.5426455,-77.4409035,17z/data=!4m12!1m6!3m5!1s0x89b1110f90a1ab8f:0xd4cc3bb48e585cd0!2sFoster+Made!8m2!3d37.5426455!4d-77.4387148!3m4!1s0x89b1110f90a1ab8f:0xd4cc3bb48e585cd0!8m2!3d37.5426455!4d-77.4387148?hl=en-US"
                >
                    Richmond, Virginia 23219
                </a>
            </h4>
            <ul className="pl-0 mt-6 list-none">
                {socialLinks?.map((link) => (
                    <li className="inline pl-0">
                        <SocialLinkIcon link={link} />
                    </li>
                ))}
            </ul>
        </div>
    </>
);

const ContactPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    console.log({ page });

    const content = page.fields.content as TypePageContact;
    const { pageIntro, heroImage, overline, headerText, form, socialLinks } = content.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />
                {pageIntro && <PageIntroSimple fields={pageIntro.fields} page={page} />}
                <ImageWithPartialOverlayWithSlots
                    fields={{ image: heroImage, overline, headerText }}
                    componentRight={<Form fields={form.fields} />}
                    componentLeft={
                        <ComponentLeft overline={overline} headerText={headerText} socialLinks={socialLinks} />
                    }
                />
            </div>
        </Layout>
    );
};

export default ContactPage;
