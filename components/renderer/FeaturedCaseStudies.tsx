import React from 'react';
import Image from 'next/image';
import { TypeBlockFeaturedCaseStudiesFields } from '@types';

const FeaturedCaseStudies = ({ fields }: { fields: TypeBlockFeaturedCaseStudiesFields }) => {
    if (!fields) return null;

    const { overline, headerText, button, caseStudies } = fields;
    return <div>
        <div>
            {overline}
        </div>
        <div>
            {headerText}
        </div>
        <div>
            {caseStudies?.map((pageCaseStudy) => {
                const title = pageCaseStudy.fields.title
                const caseStudyFields = pageCaseStudy.fields.content.fields.caseStudy.fields
                const { summary, heroImage, } = caseStudyFields
                console.log(heroImage)
                console.log(heroImage.fields.media.fields.file.url)
                return (<div className="grid grid-cols-2">
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
                        <Image
                            src={`https:${heroImage.fields.media.fields.file.url}`}
                            width={heroImage.fields.media.fields.file.details.image.width}
                            height={heroImage.fields.media.fields.file.details.image.height}
                        />
                    </div>

                </div>)
            })}
        </div>
    </div>


};

export default FeaturedCaseStudies;
