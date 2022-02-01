import React from 'react';
import { TypeComponentCtaButtonFields } from '@types';
import LinkWrapper from './LinkWrapper';

const ButtonCircle = ({ button }: { button: TypeComponentCtaButtonFields }) => {
    const { buttonText } = button;
    return (
        <LinkWrapper link={button.link} anchorLink={button.anchorLink} slugQueryParam={button.slugQueryParam}>
            <a className="btn-circle">
                <span>{buttonText}</span>
            </a>
        </LinkWrapper>
    );
};

export default ButtonCircle;
