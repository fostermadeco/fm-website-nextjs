import Link from 'next/link';
import React from 'react';
import { TypePageIndustry } from '../lib/types/TypePageIndustry';
import Arrow from './Arrow';
import ButtonCircle from './ButtonCircle';

type PageIntroDetailProps = {
    block: TypePageIndustry;
};

const PageIntroDetail = (props: PageIntroDetailProps) => {
    console.log({ props });
    const { block } = props;
    const { overline, headerText, headerParagraph, button } = block.fields;

    return (
        <div className="relative mx-auto">
            <div className="mb-24 mt-14 md:my-14">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="my-8 md:my-0 md:col-span-3 md:col-start-2">
                        <Link href="/expertise">
                            <a className="flex items-start justify-start mt-10">
                                <Arrow direction="left" />
                                <span className="inline-block ml-4 text-xl lg:text-2xl">Expertise</span>
                            </a>
                        </Link>
                    </div>
                    <div className="col-span-7">
                        <h2 className="h5 overline">{overline}</h2>
                        <h3 className="h3">{headerText}</h3>
                        <p className="p-xl">{headerParagraph}</p>
                        <div className="absolute z-10 right-8 md:right-16 -bottom-44 md:-bottom-34">
                            <ButtonCircle button={button.fields} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntroDetail;
