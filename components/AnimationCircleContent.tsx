import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';

const variants = {
    visible: {
        opacity: 1,
        transition: {
            // when: 'beforeChildren',
            duration: 1,
            staggerChildren: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            // duration: 1,
            when: 'afterChildren',
        },
    },
};

const AnimationCircleContent = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const controls = useAnimation();
    const { observe, inView } = useInView<HTMLDivElement | null>({
        // rootMargin: '-500px 0px',
        threshold: 0.9,
    });

    useEffect(() => {
        controls.start(inView ? 'visible' : 'hidden');
    }, [controls, inView]);

    return (
        <motion.div
            ref={observe}
            initial="hidden"
            whileInView="visible"
            animate={controls}
            variants={variants}
            className="container"
        >
            {children}
        </motion.div>
    );
};

export default AnimationCircleContent;
