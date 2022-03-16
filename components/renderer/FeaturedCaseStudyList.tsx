import React from 'react';
import { TypeBlockFeaturedCaseStudiesFields } from '@types';
import ButtonCircle from '@components/ButtonCircle';
import FeaturedCaseStudy from './FeaturedCaseStudy';

type FeaturedCaseStudyListPropTypes = {
    fields: TypeBlockFeaturedCaseStudiesFields;
};
const FeaturedCaseStudyList = (props: FeaturedCaseStudyListPropTypes) => {
    const { fields } = props;
    if (!fields) return null;

    const { overline, headerText, caseStudies, button } = fields;
    return (
        <div className="container">
            <div className="bg-black pb-40">
                <div className={` pb-20 pt-40 text-center`}>
                    <div className="h5 overline text-white">{overline}</div>
                    <div className="h3 text-white">{headerText}</div>
                </div>
                {caseStudies?.map((pageCaseStudy) => (
                    <FeaturedCaseStudy key={pageCaseStudy.fields.content.sys.id} pageCaseStudy={pageCaseStudy} />
                ))}
                {button && (
                    <div className="flex justify-center mt-20">
                        <ButtonCircle bgColor="ivory" button={button.fields} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedCaseStudyList;
