import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockSlideshowFields } from '../../lib/types/TypeComponentBlockSlideshow';

const Slideshow = ({ fields }: { fields: TypeComponentBlockSlideshowFields }) => {
    console.log({ fields });

    if (!fields) return null;

    return (
        <div style={{ position: 'relative' }}>
            <div className="mx-auto">
                <div className="my-14">
                    <div className="mx-6 block md:mx-0 md:grid md:grid-cols-14">
                        <div className="col-start-2 col-span-12">
                            <div className="flex items-center">
                                <div>
                                    <h2 className="h5 z-10">{fields.overline}</h2>
                                    <p className="h3">{fields.headerText}</p>
                                </div>
                                <div>
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
        </div>
    );
};

export default Slideshow;
