import React, { useEffect, useState } from 'react';
import LinkWrapper from '@components/LinkWrapper';
import Image from 'next/image';
import { TypePage, TypePageCaseStudy } from '@types';
import AnimationFadeIn from '@components/AnimationFadeIn';
import { useAnimation } from 'framer-motion';

type FeaturedCaseStudyPropTypes = {
    pageCaseStudy: TypePage;
};

const FeaturedCaseStudy = ({ pageCaseStudy }: FeaturedCaseStudyPropTypes) => {
    const { title } = pageCaseStudy.fields;
    const { fields: caseStudyPageFields } = pageCaseStudy.fields.content as TypePageCaseStudy;
    const { summary, heroImage } = caseStudyPageFields.caseStudy.fields;
    const [imageIsLoaded, setImageIsLoaded] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        if (!imageIsLoaded) return;
        animationControls.start('visible');
    }, [imageIsLoaded]);

    return (
        <LinkWrapper page={pageCaseStudy}>
            <a>
                <div className="items-center grid-cols-1 gap-0 mx-6 mb-24 group md:mx-0 md:grid md:grid-cols-14 md:gap-8">
                    <div className="col-span-4 col-start-2">
                        <div className="text-white h5 overline">Case Study</div>
                        <div className="text-white h4 group-hover:text-lime">{title}</div>
                        <p className="text-white">{summary}</p>
                        <div className="inline-block mt-4 text-white h5 emdash-in">Read More</div>
                    </div>
                    <div className="col-span-9">
                        <AnimationFadeIn animate={animationControls}>
                            <div className="relative w-full h-72 md:h-[550px]">
                                <Image
                                    src={`https:${heroImage.fields.media.fields.file.url}`}
                                    height={550}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    onLoadingComplete={() => setImageIsLoaded(true)}
                                />
                            </div>
                        </AnimationFadeIn>
                    </div>
                </div>
            </a>
        </LinkWrapper>
    );
};

export default FeaturedCaseStudy;
