import React from 'react';
import * as Contentful from 'contentful';

type HeaderGroupProps = {
    mode?: 'dark' | 'light';
    overline?: Contentful.EntryFields.Symbol;
    headerText?: Contentful.EntryFields.Symbol;
    paragraph?: Contentful.EntryFields.Text;
};

const HeaderGroup = (props: HeaderGroupProps) => {
    const { mode = 'light', overline, headerText, paragraph } = props;
    const textColor = mode === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className="max-w-2xl mx-auto text-center">
            {overline && <h2 className={`${textColor} h5 overline`}>{overline}</h2>}
            {headerText && <h3 className={`${textColor} h2`}>{headerText}</h3>}
            {paragraph && <p className={`${textColor} px-8  p-xl`}>{paragraph}</p>}
        </div>
    );
};

export default HeaderGroup;
