import Link from 'next/link';
import React from 'react';
import { TypeComponentBlockCtaFullSimpleFields } from '../../lib/types';
import ButtonCircle from '../ButtonCircle';

const CtaFullSimple = ({ fields }: { fields: TypeComponentBlockCtaFullSimpleFields }) => {
    // if (!fields) return null;

    const { headerText } = fields;
    console.log('cta');
    console.log(fields);

    return (
        <div className="relative overflow-hidden">
            <div
                className="absolute z-0 rounded-full bg-ivory"
                style={{ width: '2600px', height: '2600px', left: -750 }}
            />
            <div className="relative pb-20 mx-auto pt-60">
                <div className="my-14">
                    <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                        <div className="col-span-12 col-start-2">
                            <div className="flex items-center">
                                <div>
                                    <div className="py-8">
                                        <p className="text-center h3">{headerText}</p>
                                    </div>
                                    <div className="flex items-center justify-center py-8">
                                        <ButtonCircle buttonText={fields.button.fields.buttonText} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaFullSimple;
