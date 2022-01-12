import React from 'react';
import { TypePage } from '../lib/types';
import { TypePageIndustryFields, TypePageIndustry } from '../lib/types/TypePageIndustry';

type PageIntroDetailProps = {
    block: TypePageIndustry;
};

const PageIntroDetail = (props: PageIntroDetailProps) => {
    console.log({ props });
    const { block } = props;
    const { overline, headerText, headerParagraph } = block.fields;

    return (
        <div className="container mx-auto">
            <div className="my-14 mx-6 md:mx-0">
                <h2 className="h5 overline">{overline}</h2>
                <h3 className="h3">{headerText}</h3>
                <p className="p-xl">{headerParagraph}</p>
            </div>
        </div>
    );
};

export default PageIntroDetail;
