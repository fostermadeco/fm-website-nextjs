import React from 'react';
import LinkWrapper from '@components/LinkWrapper';
import Image from 'next/image';
import classNames from 'classnames';
import { TypePageCaseStudy, TypePageFields } from '@types';
import * as Contentful from 'contentful';

type CaseStudyPropTypes = {
    pageCaseStudy: Contentful.Entry<TypePageFields>;
};

const CaseStudy = ({ pageCaseStudy }: CaseStudyPropTypes) => {
    const { title } = pageCaseStudy.fields;
    const { fields: caseStudyPageFields } = pageCaseStudy.fields.content as TypePageCaseStudy;
    const { summary, heroImage } = caseStudyPageFields.caseStudy.fields;
    return (
        <div
            key={pageCaseStudy.fields.content.sys.id}
            className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14 pb-24"
        >
            <div className="col-span-4 col-start-2">
                <h5
                    className={classNames(`h5 overline`, {
                        'text-white': true,
                    })}
                >
                    Case Study
                </h5>
                <h3 className={classNames(`h4`, `hover:text-lime`, { 'text-white': true })}>{title}</h3>
                <p className={classNames({ 'text-white': true })}>{summary}</p>
                <div>
                    <LinkWrapper page={pageCaseStudy}>
                        <a
                            className={classNames(`inline-block mt-4 h5 emdash-in`, {
                                'text-white': true,
                            })}
                        >
                            Read More
                        </a>
                    </LinkWrapper>
                </div>
            </div>
            <div className="col-span-9">
                <LinkWrapper page={pageCaseStudy}>
                    <a>
                        <Image
                            src={`https:${heroImage.fields.media.fields.file.url}`}
                            width={heroImage.fields.media.fields.file.details.image?.width}
                            height={heroImage.fields.media.fields.file.details.image?.height}
                        />
                    </a>
                </LinkWrapper>
            </div>
        </div>
    );
};

export default CaseStudy;
