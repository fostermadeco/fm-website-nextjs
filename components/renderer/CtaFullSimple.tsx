import React from 'react';
import { TypeCtaSimpleFields } from '@types';
import ButtonCircle from '../ButtonCircle';

const CtaFullSimple = ({ fields }: { fields: TypeCtaSimpleFields }) => {
    // if (!fields) return null;

    const { headerText } = fields;

    return (
        <div className="relative overflow-hidden">
            <div
                className="absolute z-0 rounded-full bg-ivory"
                style={{ width: '2600px', height: '2600px', left: -750 }}
            />
            <div className="relative pb-20 mx-auto pt-60">
                <div className="my-14">
                    <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                        <div className="col-span-12 col-start-2 md:col-span-8 md:col-start-4">
                            <div className="flex items-center">
                                <div>
                                    <div className="py-8">
                                        <p className="text-center h2">{headerText}</p>
                                    </div>
                                    {fields.button && (
                                        <div className="flex items-center justify-center py-8">
                                            <ButtonCircle button={fields.button.fields} bgColor="ivory" />
                                        </div>
                                    )}
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
