import React, { useEffect, useRef } from 'react';
import { TypeBlockPageIntroDetailFields } from '@types';
// import { useInView } from 'react-intersection-observer';

import ButtonCircle from './ButtonCircle';
import AnimatedCircleBg from './AnimatedCircleBg';
import AnimationCircleContent from './AnimationCircleContent';

type PageIntroDetailProps = {
    fields: TypeBlockPageIntroDetailFields;
};

const PageIntroCircle = (props: PageIntroDetailProps) => {
    const { fields } = props;

    if (!fields) return null;

    const { overline, headerText, headerParagraph, button } = fields;

    return (
        <div className="relative">
            <div className="pb-80 pt-60">
                <AnimationCircleContent>
                    <div className="container">
                        <div className="max-w-6xl mx-auto text-center">
                            <h1 className="h5 overline">{overline}</h1>
                            <h2 className="h1">{headerText}</h2>
                            {headerParagraph && <p className="h4">{headerParagraph}</p>}
                            {button && (
                                <div className="flex justify-center mt-20">
                                    <ButtonCircle bgColor="ivory" button={button.fields} />
                                </div>
                            )}
                        </div>
                    </div>
                </AnimationCircleContent>
            </div>
            <AnimatedCircleBg />
        </div>
    );
};

export default PageIntroCircle;
