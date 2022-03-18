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
        <div className="bg-black">
            <div className="container">
                <div className="pb-40">
                    <div className="max-w-2xl pt-40 pb-20 mx-auto text-center">
                        <div className="text-white h5 overline">{overline}</div>
                        <div className="text-white h3">{headerText}</div>
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
        </div>
    );
};

export default FeaturedCaseStudyList;
