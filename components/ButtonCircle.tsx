import Link from 'next/link';
import React from 'react';

type ButtonCircleProps = {
    buttonText: string;
};

const ButtonCircle = (props: ButtonCircleProps) => {
    const { buttonText } = props;
    return (
        <Link href="#">
            <a className="btn-circle">
                <span>{buttonText}</span>
            </a>
        </Link>
    );
};

export default ButtonCircle;
