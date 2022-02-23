import Link from 'next/link';
import React from 'react';
import { TypePage, TypeBlockPageIntroSimpleFields } from '@types';
import ButtonCircle from '../ButtonCircle';

type PageIntroSimpleProps = {
    fields: TypeBlockPageIntroSimpleFields;
    page: TypePage;
};

const PageIntroSimple = (props: PageIntroSimpleProps) => {
    const { fields, page } = props;
    if (!fields) return null;

    const { overline, headerText, button } = fields;

    return (
        <div className="container relative mx-auto">
            <div className="mb-10 mt-14 md:mb-24 ">
                <div className="block mx-6 md:mx-0 md:grid md:grid-cols-14">
                    <div className="col-span-8 col-start-2">
                        <div>
                            <h1 className="h5 overline">{overline}</h1>
                            <h2 className="h1">{headerText}</h2>
                        </div>
                    </div>
                    {button && (
                        <div className="flex items-center justify-center col-span-2 col-start-12 mt-6 md:mt-0 md:justify-end">
                            <ButtonCircle button={button.fields} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageIntroSimple;
