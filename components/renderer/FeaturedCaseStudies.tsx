import React from 'react';
import { TypeBlockFeaturedCaseStudiesFields } from '@types';

import classNames from 'classnames';
import CaseStudy from './CaseStudy';

type FeaturedCaseStudiesPropTypes = {
    fields: TypeBlockFeaturedCaseStudiesFields;
};
const FeaturedCaseStudies = (props: FeaturedCaseStudiesPropTypes) => {
    const { fields } = props;
    if (!fields) return null;

    const { overline, headerText, caseStudies } = fields;

    return (
        <div className="container'">
            <div className="container mx-auto bg-black">
                <div className={` pb-20 pt-40 max-w-6xl mx-auto text-center`}>
                    <div className={classNames(`h5 overline`, { 'text-white': true })}>{overline}</div>
                    <div className={classNames(`h3`, { 'text-white': true })}>{headerText}</div>
                </div>
                {caseStudies?.map((pageCaseStudy) => (
                    <CaseStudy pageCaseStudy={pageCaseStudy} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedCaseStudies;
