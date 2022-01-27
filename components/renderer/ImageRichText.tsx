/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TypeComponentImageRichText } from '../../lib/types';

const styles = {
    image: {
        margin: 0,
    },
};

const ImageRichText = ({ fields }: TypeComponentImageRichText) => {
    const { title, image } = fields;

    return (
        <div className="flex flex-col w-full mt-8 lg:mb-12">
            <img alt="" className="w-full" style={styles.image} src={`${image.fields.file.url}?w=960`} />
            <span className="py-4 text-center text-gray-700">{title}</span>
        </div>
    );
};

export default ImageRichText;
