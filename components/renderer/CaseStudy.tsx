import React from 'react';
import LinkWrapper from '@components/LinkWrapper';
import Image from 'next/image';
import { TypePage, TypePageCaseStudy } from '@types';

type CaseStudyPropTypes = {
    pageCaseStudy: TypePage;
};

const CaseStudy = ({ pageCaseStudy }: CaseStudyPropTypes) => {
    const { title } = pageCaseStudy.fields;
    const { fields: caseStudyPageFields } = pageCaseStudy.fields.content as TypePageCaseStudy;
    const { summary, heroImage } = caseStudyPageFields.caseStudy.fields;
    return (
        <LinkWrapper page={pageCaseStudy}>
            <a>
                <div className="group items-center grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14 mb-24 md:gap-8">
                    <div className="col-span-4 col-start-2">
                        <div className="h5 overline text-white">Case Study</div>
                        <div className="h4 group-hover:text-lime text-white">{title}</div>
                        <p className="text-white">{summary}</p>
                        <div
                            className="inline-block mt-4 h5 emdash-in
                                        text-white"
                        >
                            Read More
                        </div>
                    </div>
                    <div className="col-span-9">
                        <Image
                            src={`https:${heroImage.fields.media.fields.file.url}`}
                            width={heroImage.fields.media.fields.file.details.image?.width}
                            height={heroImage.fields.media.fields.file.details.image?.height}
                        />
                    </div>
                </div>
            </a>
        </LinkWrapper>
    );
};

export default CaseStudy;
