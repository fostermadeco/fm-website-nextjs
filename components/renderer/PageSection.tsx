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
        <div style={{ position: 'relative', width: '100%', height: '620px' }}>
            <Image
                className="z-0"
                height={420}
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
    const { headerBlock, paragraph, linkText } = fields;
    return (
        <div>
            <h2 className="h5 z-10">{headerBlock.fields.overline}</h2>
            <p className="h3">{headerBlock.fields.header}</p>
            <p className="p-lg mt-6">{paragraph}</p>
            {linkText && (
                <Link href="#">
                    <a className="inline-block mt-4 text-black font-headline text-2xl underline">{linkText}</a>
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
                    <div className="grid grid-cols-1 gap-0 items-center md:grid-cols-2 md:gap-8">
                        <div>
                            <div className="grid grid-cols-7">
                                <div className="col-start-2 col-span-5">
                                    {imagePlacement === 'Left' && (
                                        <PageSectionImage url={image.fields.media.fields.file.url} />
                                    )}
                                    {imagePlacement === 'Right' && <PageSectionContent fields={fields} />}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-7">
                                {imagePlacement === 'Left' && (
                                    <div className="col-span-6">
                                        <PageSectionContent fields={fields} />
                                    </div>
                                )}
                                {imagePlacement === 'Right' && (
                                    <div className="col-span-7">
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
