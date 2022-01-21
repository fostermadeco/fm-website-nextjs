import Link from 'next/link';
import React from 'react';
import { TypeComponentCtaButtonFields } from '../lib/types/TypeComponentCtaButton';

const ButtonCircle = ({ button }: { button: TypeComponentCtaButtonFields }) => {
    const { buttonText } = button;
    return (
        <Link href="#">
            <a className="btn-circle">
                <span>{buttonText}</span>
            </a>
        </Link>
    );
};

export default ButtonCircle;
