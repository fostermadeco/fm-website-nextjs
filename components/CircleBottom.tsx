import React, { useEffect, useRef } from 'react';
import useDimensions from 'react-cool-dimensions';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const CircleBottom = () => {
    const { observe: observeWrapper, width } = useDimensions<HTMLDivElement | null>();

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, (value) => 1 - value * 2);

    const circleSize = width + 400;

    return (
        <div>
            <motion.div className="overflow-hidden" ref={observeWrapper} style={{ width: '100%', height: '100%' }}>
                <motion.div
                    className="absolute bottom-0 mx-auto rounded-full -z-10 bg-ivory"
                    style={{
                        scale,
                        width: `${circleSize}px`,
                        height: `${circleSize}px`,
                        left: `-200px`,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default CircleBottom;
