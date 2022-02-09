import React from 'react';
import { TypeBlockCtaBottomFields } from '@types';
import BlockRenderer from './BlockRenderer';

// Wrapper for other ctas
const CtaBottom = ({ fields }: { fields: TypeBlockCtaBottomFields }) => {
    const { cta } = fields;
    return <BlockRenderer block={cta} />;
};

export default CtaBottom;
