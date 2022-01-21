import React from 'react';

type ArrowPropTypes = {
    direction?: 'down' | 'up' | 'left' | 'right';
};

const getRotation = (direction: 'down' | 'up' | 'left' | 'right') => {
    if (direction === 'down') return '-rotate-90';
    if (direction === 'up') return 'rotate-90';
    if (direction === 'left') return '';
    return 'rotate-180';
};

// width="49px" height="36px"
const Arrow = (props: ArrowPropTypes) => {
    const { direction = 'right' } = props;

    return (
        <div className={`${getRotation(direction)} inline-block w-6 md:w-8 lg:w-10`}>
            <svg viewBox="0 0 49 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Industry" transform="translate(-128.000000, -273.000000)" stroke="#000000" strokeWidth="2">
                        <g
                            id="Group-3"
                            transform="translate(153.000000, 291.000000) rotate(-270.000000) translate(-153.000000, -291.000000) translate(136.000000, 267.000000)"
                        >
                            <polyline
                                id="Line-3"
                                transform="translate(17.000000, 30.500000) rotate(-45.000000) translate(-17.000000, -30.500000) "
                                points="5 18.5 5 42.5 29 42.5"
                            />
                            <line x1="17" y1="46.5" x2="17" y2="0.5" id="Line-5" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Arrow;
