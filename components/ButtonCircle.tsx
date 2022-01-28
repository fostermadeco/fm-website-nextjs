import React from 'react';
import { TypeComponentCtaButtonFields } from '../lib/types/TypeComponentCtaButton';
import LinkWrapper from './LinkWrapper';

const ButtonCircle = ({ button }: { button: TypeComponentCtaButtonFields }) => {
    const { buttonText } = button;
    return (
        <LinkWrapper link={button.link}>
            <a className="btn-circle">
                <span>{buttonText}</span>
            </a>
        </LinkWrapper>
    );
};

export default ButtonCircle;
