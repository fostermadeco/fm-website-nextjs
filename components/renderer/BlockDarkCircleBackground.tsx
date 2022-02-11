import React from 'react';
import { TypeBlockDarkCircleBackgroundFields } from '@types';
import DarkCircleBackground from '@components/DarkCircleBackground';
import BlockRenderer from './BlockRenderer';

const BlockDarkCircleBackground = ({ fields }: { fields: TypeBlockDarkCircleBackgroundFields }) => {
    if (!fields) return null;

    return (
        <DarkCircleBackground>
            <BlockRenderer block={fields.block} mode="dark" />
        </DarkCircleBackground>
    );
};

export default BlockDarkCircleBackground;
