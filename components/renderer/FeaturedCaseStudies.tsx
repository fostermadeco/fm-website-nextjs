import React from 'react';
import Image from 'next/image';
import { TypeBlockFeaturedCaseStudiesFields } from '@types';
import LinkWrapper from '@components/LinkWrapper';
import classNames from 'classnames';

type FeaturedCaseStudiesPropTypes = {
    fields: TypeBlockFeaturedCaseStudiesFields;
    mode: 'dark' | 'light';
};
const FeaturedCaseStudies = (props: FeaturedCaseStudiesPropTypes) => {
    const { fields, mode } = props
    if (!fields) return null;

    const { overline, headerText, caseStudies } = fields;
    const isDark = mode === 'dark';

    return <div className='container'><div className='container mx-auto'>
        <div className={` pb-20 pt-40 max-w-6xl mx-auto text-center`}>
            <div className={classNames(`h5 overline`, { 'text-white': isDark })}>
                {overline}
            </div>
            <div className={classNames(`h3`, { 'text-white': isDark })}>
                {headerText}
            </div>
        </div>
        {caseStudies?.map((pageCaseStudy) => {
            const title = pageCaseStudy.fields.title
            const caseStudyFields = pageCaseStudy.fields.content.fields.caseStudy.fields
            const { summary, heroImage } = caseStudyFields
            return (<div key={pageCaseStudy.fields.content.sys.id} className="items-center block grid-cols-1 gap-0 mx-6 md:mx-0 md:grid md:grid-cols-14">
                <div className="col-span-6 col-start-2" >
                    <h5 className={classNames(`h5 overline`, { 'text-white': isDark })}>
                        Case Study
                    </h5>
                    <h3 className={classNames(`h4`, { 'text-white': isDark })}>
                        {title}
                    </h3>
                    <p>{summary}</p>
                    <div>
                        <LinkWrapper page={pageCaseStudy}>
                            <a
                                className={classNames(`inline-block mt-4 h5 emdash-in`, {
                                    'text-white': isDark,
                                })}
                            >
                                Read More
                            </a>
                        </LinkWrapper>
                    </div>

                </div>
                <div className="col-span-7 col-start-9">
                    <Image
                        src={`https:${heroImage.fields.media.fields.file.url}`}
                        width={heroImage.fields.media.fields.file.details.image.width}
                        height={heroImage.fields.media.fields.file.details.image.height}
                    />
                </div>
            </div>)
        })}
    </div></div>
};

export default FeaturedCaseStudies;
