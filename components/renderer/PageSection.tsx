import Image from 'next/image';
import React from 'react';
import { TypeBlockPageSectionFields } from '@types';
import LinkWrapper from '../LinkWrapper';
import TextMarkdown from '../TextMarkdown';

type PageSectionImageProps = {
    url: string;
};

const PageSectionImage = (props: PageSectionImageProps) => {
    const { url } = props;
    return (
        <div className="relative w-full h-72 md:h-page-section-image-height-desktop">
            <Image
                className="z-0"
                height={620}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={`https:${url}`}
                alt=""
            />
        </div>
    );
};

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const PageSectionContent = ({ fields }: { fields: TypeBlockPageSectionFields }) => {
    const { overline, headerText, paragraph, links } = fields;
    return (
        <div>
            <h2 className="h5 overline">{overline}</h2>
            <p className="h3">{headerText}</p>
            {paragraph && (
                <div className="mt-6">
                    <TextMarkdown text={paragraph} />
                </div>
            )}
            {links && (
                <ul className="mt-4">
                    {links.map((link) => (
                        <li key={`link-${getRandomInt(100)}`}>
                            <LinkWrapper page={link.fields.linkPage}>
                                <a className="inline-block mb-3 text-xl text-black md:text-2xl font-headline border-b-in">
                                    {link.fields.linkText}
                                </a>
                            </LinkWrapper>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const PageSection = ({ fields }: { fields: TypeBlockPageSectionFields }) => {
    if (!fields) return null;

    const { imagePlacement, image } = fields;

    return (
        <div className="relative">
            <div className="container mx-auto">
                <div className="my-14">
                    <div className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14">
                        {imagePlacement === 'Left' && (
                            <div className="col-span-5 col-start-2">
                                <PageSectionImage url={image.fields.media.fields.file.url} />
                            </div>
                        )}
                        {imagePlacement === 'Right' && (
                            <div className="col-span-6 col-start-2">
                                <PageSectionContent fields={fields} />
                            </div>
                        )}
                        {imagePlacement === 'Left' && (
                            <div className="col-span-6 col-start-8">
                                <div className="mt-6 md:mt-0">
                                    <PageSectionContent fields={fields} />
                                </div>
                            </div>
                        )}
                        {imagePlacement === 'Right' && (
                            <div className="col-span-7 col-start-9">
                                <div className="mt-6 md:mt-0">
                                    <PageSectionImage url={image.fields.media.fields.file.url} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageSection;
