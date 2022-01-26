import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockPageSectionFields } from '../../lib/types';
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

const PageSectionContent = ({ fields }: { fields: TypeComponentBlockPageSectionFields }) => {
    const { overline, headerText, paragraph, links } = fields;
    return (
        <div>
            <h2 className="h5 overline">{overline}</h2>
            <p className="h3">{headerText}</p>
            <div className="mt-6">
                <TextMarkdown text={paragraph} />
            </div>
            {links && (
                <ul className="mt-4">
                    {links.map((link) => (
                        <li>
                            <Link href="#">
                                <a className="inline-block mb-3 text-xl text-black md:text-2xl font-headline border-b-in">
                                    {link.fields.linkText}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const PageSection = ({ fields }: { fields: TypeComponentBlockPageSectionFields }) => {
    console.log({ fields });

    if (!fields) return null;

    const { imagePlacement, image } = fields;

    return (
        <div className="relative">
            <div className="mx-auto">
                <div className="my-14">
                    <div className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <div className="block grid-cols-7 md:grid">
                                <div className="col-span-5 col-start-2">
                                    {imagePlacement === 'Left' && (
                                        <PageSectionImage url={image.fields.media.fields.file.url} />
                                    )}
                                    {imagePlacement === 'Right' && <PageSectionContent fields={fields} />}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <div className="block grid-cols-7 md:grid">
                                {imagePlacement === 'Left' && (
                                    <div className="col-span-5 col-start-2 md:col-start-1 md:col-span-6">
                                        <PageSectionContent fields={fields} />
                                    </div>
                                )}
                                {imagePlacement === 'Right' && (
                                    <div className="col-span-5 col-start-2 md:col-start-1 md:col-span-7">
                                        <PageSectionImage url={image.fields.media.fields.file.url} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageSection;
