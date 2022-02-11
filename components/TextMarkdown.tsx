import React from 'react';
import ReactMarkdown from 'react-markdown';

type TextMarkdownPropTypes = {
    text: string;
};

const TextMarkdown = (props: TextMarkdownPropTypes) => {
    const { text } = props;
    console.log({ text });

    return (
        <div className="prose prose-lg md:prose-xl">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );
};

export default TextMarkdown;
