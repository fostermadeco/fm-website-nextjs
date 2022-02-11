import Link from 'next/link';
import React from 'react';

import { TypePage, TypeBlockPageIntroDetail, TypeBlockPageIntroDetailFields } from '@types';
import { getLinkToParent } from 'lib/routes';
import Arrow from '../Arrow';
import ButtonCircle from '../ButtonCircle';

type BackLinkPropTypes = {
    page: TypePage;
};

const BackLink = (props: BackLinkPropTypes) => {
    const { page } = props;

    if (!page) return null;

    const link = getLinkToParent({ page });
    return (
        <Link href={link.href}>
            <a className="flex items-start justify-start mt-10">
                <Arrow direction="left" />
                <span className="inline-block ml-4 text-xl lg:text-2xl">{link.label}</span>
            </a>
        </Link>
    );
};

type PageIntroDetailProps = TypeBlockPageIntroDetailFields & {
    page: TypePage;
};

export const PageIntroDetail = (props: PageIntroDetailProps) => {
    const { overline, headerText, headerParagraph, button, page } = props;

    return (
        <div className="container relative mx-auto">
            <div className="mb-24 mt-14 md:mb-24 ">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="my-8 md:my-0 md:col-span-3 md:col-start-2">
                        <BackLink page={page} />
                    </div>
                    <div className="col-span-7">
                        <h1 className="h5 overline">{overline}</h1>
                        <h2 className="h1">{headerText}</h2>
                        <p className="mt-2 h4">{headerParagraph}</p>
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

type BlockPageIntroDetailProps = {
    block: TypeBlockPageIntroDetail;
    page: TypePage;
};

const BlockPageIntroDetail = (props: BlockPageIntroDetailProps) => {
    const { block, page } = props;
    console.log({ block });

    if (!block) return null;

    return <PageIntroDetail {...block.fields} page={page} />;
};

export default BlockPageIntroDetail;
