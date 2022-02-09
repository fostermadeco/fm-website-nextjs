import React from 'react';
import { TypeBlockDarkCircleBackgroundFields } from '@types';
import BlockRenderer from './BlockRenderer';

const DarkCircleBackground = ({ fields }: { fields: TypeBlockDarkCircleBackgroundFields }) => {
    if (!fields) return null;

    return (
        <div className="bg-black rounded-full">
            <div className="container mx-auto">
                <div className="mx-6 py-14 md:mx-0">
                    <BlockRenderer block={fields.block} mode="dark" />
                </div>
            </div>
        </div>
    );
};

export default DarkCircleBackground;
