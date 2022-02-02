import Link from 'next/link';
import React from 'react';
import * as Contentful from 'contentful';

import { TypePageFields } from '@types';
import { getUrlByPageType } from '../../lib/constants';
import { TypeComponentPageIntroDetail } from '../../lib/types/TypeComponentBlockPageIntroDetail';
import Arrow from '../Arrow';
import ButtonCircle from '../ButtonCircle';

type BackLinkPropTypes = {
    page: Contentful.Entry<TypePageFields>;
};

const BackLink = (props: BackLinkPropTypes) => {
    const { page } = props;

    if (!page) return null;

    const backPageType = page.fields.content.sys.contentType.sys.id;
    const { slug: backPageSlug } = page.fields;
    console.log({ backPageType });

    const prefix = getUrlByPageType({ pageType: backPageType, slug: backPageSlug });
    const backPageName = page.fields.title;
    return (
        <Link href={prefix}>
            <a className="flex items-start justify-start mt-10">
                <Arrow direction="left" />
                <span className="inline-block ml-4 text-xl lg:text-2xl">{backPageName}</span>
            </a>
        </Link>
    );
};

type PageIntroDetailProps = {
    block: TypeComponentPageIntroDetail;
    parent?: Contentful.Entry<TypePageFields>;
};

const PageIntroDetail = (props: PageIntroDetailProps) => {
    const { block, parent } = props;
    console.log({ props, parent });
    const { overline, headerText, headerParagraph, button } = block.fields;

    return (
        <div className="container relative mx-auto">
            <div className="mb-24 mt-14 md:mb-24 ">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="my-8 md:my-0 md:col-span-3 md:col-start-2">
                        <BackLink page={parent} />
                    </div>
                    <div className="col-span-7">
                        <h1 className="h5 overline">{overline}</h1>
                        <h2 className="h1">{headerText}</h2>
                        <p className="h4">{headerParagraph}</p>
                        {button && (
                            <div className="absolute z-10 right-8 md:right-16 -bottom-44 md:-bottom-44">
                                <ButtonCircle button={button.fields} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageIntroDetail;
