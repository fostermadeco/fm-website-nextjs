import Link from 'next/link';
import React from 'react';
import { TypeBlockSlideshowFields } from '@types';
import { fetcher } from 'api/fetcher';
import useSWR from 'swr';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CaseStudySlideShow from '@components/CaseStudySlideShow';

const Slideshow = ({ fields }: { fields: TypeBlockSlideshowFields }) => {
    // returning data for case studies
    const { data, error } = useSWR<[], Error>('/api/case-studies', fetcher);

    if (!fields) return null;

    const { fields: slideshowFields } = fields.slideshow;
    const { overline, headerText, button } = slideshowFields;

    return (
        <div className="container relative">
            <div className="mt-20">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="col-span-6 col-start-2">
                        <div className="flex items-center">
                            <div>
                                {overline && <h3 className="overline h5">{overline}</h3>}
                                {headerText && <p className="h3">{headerText}</p>}
                            </div>
                        </div>
                    </div>
                    {button && (
                        <div className="col-span-5 ">
                            <div className="flex items-center justify-end">
                                <Link href="#">
                                    <a className="btn-circle">
                                        <span>{button.fields.buttonText}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative md:mb-10">
                <CaseStudySlideShow caseStudies={data || []} />
            </div>
        </div>
    );
};

export default Slideshow;
