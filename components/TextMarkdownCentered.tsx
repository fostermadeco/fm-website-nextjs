import React from 'react';
import * as Contentful from 'contentful';
import TextMarkdown from './TextMarkdown';

const TextMarkdownCentered = (props: { textBlock: Contentful.EntryFields.Symbol }) => {
    const { textBlock } = props;
    return (
        <div className="container relative">
            <div className="py-10 mx-6 lg:mx-0 md:py-28">
                <div className="block lg:grid lg:grid-cols-14 lg:gap-8">
                    <div className="lg:col-span-8 lg:col-start-4 xl:col-span-6 xl:col-start-5">
                        <TextMarkdown text={textBlock} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextMarkdownCentered;
