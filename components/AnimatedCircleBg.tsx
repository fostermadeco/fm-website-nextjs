import React, { useEffect, useRef } from 'react';
import useDimensions from 'react-cool-dimensions';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

type AnimatedCirlceBgProps = {
    align?: 'top' | 'bottom';
};

const AnimatedCircleBg = (props: AnimatedCirlceBgProps) => {
    const { align = 'bottom' } = props;
    const { observe: observeWrapper, width } = useDimensions<HTMLDivElement | null>();

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, (value) => 1 - value * 2);

    const circleSize = width + 400;

    return (
        <div>
            <motion.div className="overflow-hidden" ref={observeWrapper} style={{ width: '100%', height: '100%' }}>
                <motion.div
                    className={`absolute mx-auto rounded-full -z-10 bg-ivory ${align === 'top' ? 'top-0' : 'bottom-0'}`}
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

export default AnimatedCircleBg;
