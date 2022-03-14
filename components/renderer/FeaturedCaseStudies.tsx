import React from 'react';
import { TypeBlockFeaturedCaseStudiesFields, TypeCaseStudyFields, TypePageCaseStudy, TypePageCaseStudyFields } from '@types';

const FeaturedCaseStudies = ({ fields }: { fields: TypeBlockFeaturedCaseStudiesFields }) => {
    if (!fields) return null;

    const { overline, headerText, button, caseStudies } = fields;
    return <div>
        <div>

        </div>
        <div>

        </div>
        <div>
            {caseStudies?.map((pageCaseStudy) => {
                const title = pageCaseStudy.fields.title
                const caseStudyFields = pageCaseStudy.fields.content.fields.caseStudy.fields
                const {summary, heroImage, } = caseStudyFields
                console.log(heroImage)
                return (<div className="grid grid-cols-6">
                    <div >
                        <h5>
                            /Case Study
                        </h5>
                        <h3>
                            {title}
                        </h3>
                        <p>{summary}</p>
                        <div>

                        </div>

                    </div>
                    <div>
                        
                    </div>

                </div>)
            })}
        </div>
    </div>


};

export default FeaturedCaseStudies;
