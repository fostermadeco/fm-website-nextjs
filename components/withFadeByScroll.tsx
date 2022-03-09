import { motionValue, useTransform } from 'framer-motion';
import type { ComponentType, ReactPropTypes } from 'react';

const scrollOffset = motionValue(0);

export function withFadeByScroll(Component): ComponentType<any> {
    return (props) => {
        // Fade in when scroll offset hits 50
        // Finish fade when scroll offset is 200
        const opacity = useTransform(scrollOffset, [50, 200], [0, 1]);
        console.log(opacity);

        return <Component {...props} style={{ ...props.style, opacity }} />;
    };
}
