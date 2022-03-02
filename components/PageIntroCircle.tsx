import React from 'react';
import { TypeBlockPageIntroDetailFields } from '@types';
import ButtonCircle from './ButtonCircle';

type PageIntroDetailProps = {
    fields: TypeBlockPageIntroDetailFields;
};

const PageIntroCircle = (props: PageIntroDetailProps) => {
    const { fields } = props;
    if (!fields) return null;

    const { overline, headerText, headerParagraph, button } = fields;

    return (
        <div className="relative bg-ivory">
            <div className="container">
                <div className="pb-40 pt-60">
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
            </div>
        </div>
    );
};

export default PageIntroCircle;
