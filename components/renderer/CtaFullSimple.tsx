import React from 'react';
import { TypeCtaSimpleFields } from '@types';
import TextMarkdown from '@components/TextMarkdown';
import AnimatedCircleBg from '@components/AnimatedCircleBg';
import AnimationCircleContent from '@components/AnimationCircleContent';
import ButtonCircle from '../ButtonCircle';

const CtaFullSimple = ({ fields }: { fields: TypeCtaSimpleFields }) => {
    // if (!fields) return null;

    const { headerText, paragraphText } = fields;

    return (
        <div className="relative">
            <div className="pb-20 pt-80">
                <div className="my-14">
                    <AnimationCircleContent>
                        <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                            <div className="col-span-12 col-start-2 md:col-span-8 md:col-start-4">
                                <div className="flex items-center">
                                    <div>
                                        <div className="pt-8 pb-20">
                                            <p className="text-center h2">{headerText}</p>
                                        </div>
                                        {paragraphText && (
                                            <div className="pb-6 text-center">
                                                <TextMarkdown text={paragraphText} />
                                            </div>
                                        )}
                                        {fields.button && (
                                            <div className="flex items-center justify-center py-8">
                                                <ButtonCircle button={fields.button.fields} bgColor="ivory" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationCircleContent>
                </div>
            </div>
            <AnimatedCircleBg align="top" />
        </div>
    );
};

export default CtaFullSimple;
