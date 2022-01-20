import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockPageSectionFields } from '../../lib/types';

type PageSectionImageProps = {
    url: string;
};

const PageSectionImage = (props: PageSectionImageProps) => {
    const { url } = props;
    return (
        <div className="relative w-full" style={{ height: '620px' }}>
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
    const { overline, headerText, paragraph, linkText } = fields;
    return (
        <div>
            <h2 className="h5 overline">{overline}</h2>
            <p className="h3">{headerText}</p>
            <p className="mt-6 p-lg">{paragraph}</p>
            {linkText && (
                <Link href="#">
                    <a className="inline-block mt-4 text-2xl text-black font-headline border-b-in">{linkText}</a>
                </Link>
            )}
        </div>
    );
};

const PageSection = ({ fields }: { fields: TypeComponentBlockPageSectionFields }) => {
    console.log({ fields });

    if (!fields) return null;

    const { imagePlacement, image } = fields;

    return (
        <div style={{ position: 'relative' }}>
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
