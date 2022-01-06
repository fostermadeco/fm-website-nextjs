import Image from 'next/image';
import React from 'react';
import getPage from '../../api/api';
import { TypePage } from '../../lib/types';

export async function getStaticProps() {
    const page = await getPage({
        pageContentType: 'pageLanding',
        slug: 'company',
    });

    return {
        props: {
            page,
        },
    };
}

const CompanyPage = ({ page }: { page: TypePage }) => {
    console.log({ page });

    return (
        <div className="mx-auto">
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '620px' }}>
                    <Image
                        className="z-0"
                        height={420}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        src={`https:${page.fields.content.fields.pageIntro.fields.image.fields.media.fields.file.url}`}
                        alt=""
                    />
                    <div className="z-10 relative grid grid-rows-3 grid-cols-3" style={{ height: '620px' }}>
                        <div className="md:col-span-2 md:col-start-2 md:row-start-2">
                            <h1 className="h5 text-white z-10">
                                /{page.fields.content.fields.pageIntro.fields.overline}
                            </h1>
                            <p className="h1 text-white">{page.fields.content.fields.pageIntro.fields.headerText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
