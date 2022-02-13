import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { TypePage, TypePagePerson, TypePerson, TypePersonFields } from '@types';
import { PageHead } from '@components/PageHead';
import PageIntroDetail from '@components/renderer/PageIntroDetail';
import { getPage, getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import Layout from '@components/Layout';
import ImageWithPartialOverlay from '@components/renderer/ImageWithPartialOverlay';
import DarkCircleBackground from '@components/DarkCircleBackground';
import NumberedBlocks from '@components/renderer/NumberedBlocks';
import HeaderGroup from '@components/HeaderGroup';

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

const getOverlayParagraph = (personFields: TypePersonFields) => {
    const markdown = [];

    if (personFields.bio) {
        markdown.push(`##### / Professional Bio \n ${personFields.bio}`);
    }

    if (personFields.atFosterMade) {
        markdown.push(`##### / At Foster Made\n ${personFields.atFosterMade}`);
    }
    if (personFields.expertise) {
        markdown.push(`##### / At Core Expertise\n ${personFields.expertise.map((e) => `- ${e}`).join('\n')}`);
    }
    // add blank spaces
    return markdown.join('\n ##### &nbsp;\n ');
};

const TeamPage = ({ page, preview }: { page: TypePage; preview: boolean }) => {
    const content = page.fields.content as TypePagePerson;
    console.log({ content });

    const { person, wideImage } = content.fields;
    const { firstName, lastName, jobTitle, atAGlance, funFacts, beyondIntroductions, testimonial } = person.fields;

    return (
        <Layout preview={preview}>
            <div className="pt-40">
                <PageHead page={page} />

                <PageIntroDetail
                    fields={{
                        overline: 'Our Team',
                        headerText: `${firstName} ${lastName}`,
                        headerParagraph: jobTitle,
                    }}
                    page={page}
                />
                {wideImage && (
                    <ImageWithPartialOverlay
                        fields={{
                            overline: 'At a Glance',
                            image: wideImage,
                            headerText: atAGlance,
                            paragraphText: getOverlayParagraph(person.fields),
                        }}
                    />
                )}
                {funFacts && (
                    <DarkCircleBackground>
                        <HeaderGroup mode="dark" overline="Beyond Introductions" headerText={beyondIntroductions} />
                        <NumberedBlocks mode="dark" fields={{ fact: funFacts }} />

                        <div className="max-w-3xl mx-auto">
                            <figure className="">
                                <h5 className="text-center text-white h5 overline">
                                    What do you love about your role?
                                </h5>
                                <blockquote className="text-left">
                                    <p className="text-2xl italic font-bold leading-tight text-white md:text-5xl font-headline">
                                        "{testimonial}"
                                    </p>
                                </blockquote>
                            </figure>
                        </div>
                    </DarkCircleBackground>
                )}
            </div>
        </Layout>
    );
};

export default TeamPage;
