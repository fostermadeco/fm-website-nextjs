import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockSlideshowFields } from '../../lib/types/TypeComponentBlockSlideshow';

const Slideshow = ({ fields }: { fields: TypeComponentBlockSlideshowFields }) => {
    console.log({ fields });

    if (!fields) return null;

    return (
        <div className="relative">
            <div className="mx-auto">
                <div className="my-14">
                    <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                        <div className="col-span-6 col-start-2">
                            <div className="flex items-center">
                                <div>
                                    <h3 className="overline h5">{fields.overline}</h3>
                                    <p className="h3">{fields.headerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 ">
                            <div className="flex items-center justify-end">
                                <Link href="#">
                                    <a className="btn-circle">
                                        <span>{fields.button.fields.buttonText}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
