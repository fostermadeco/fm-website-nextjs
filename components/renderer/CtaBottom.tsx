import React from 'react';
import { TypeComponentBlockCtaBottomFields } from '../../lib/types';
import BlockRenderer from './BlockRenderer';

// Wrapper for other ctas
const CtaBottom = ({ fields }: { fields: TypeComponentBlockCtaBottomFields }) => {
    const { cta } = fields;
    return <BlockRenderer block={cta} />;
};

export default CtaBottom;
