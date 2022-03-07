import React from 'react';
import { TypeButtonFields } from '@types';
import { motion } from 'framer-motion';
import LinkWrapper from './LinkWrapper';

type ButtonCirclePropTypes = {
    button: TypeButtonFields;
    bgColor?: 'white' | 'ivory';
};

const classesForBgColor = {
    white: 'bt-circle-white',
    ivory: 'btn-circle-ivory',
};

const ButtonCircle = (props: ButtonCirclePropTypes) => {
    const { button, bgColor = 'white' } = props;
    const { buttonText } = button;
    const buttonClasses = classesForBgColor[bgColor];

    return (
        <LinkWrapper page={button.linkPage} href={button.linkPath}>
            <motion.a whileHover={{ scale: 1.03 }} className={`btn-circle ${buttonClasses}`}>
                <span>{buttonText}</span>
            </motion.a>
        </LinkWrapper>
    );
};

export default ButtonCircle;
