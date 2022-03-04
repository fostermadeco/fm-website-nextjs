import React from 'react';
import { AnimationProps, motion } from 'framer-motion';

const AnimationFadeIn = ({
    children,
    animate,
    ...rest
}: { children: JSX.Element | JSX.Element[] } & AnimationProps) => (
    <motion.div
        layout
        initial="hidden"
        animate={animate || 'visible'}
        transition={{ duration: 0.3 }}
        variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
        }}
        {...rest}
    >
        {children}
    </motion.div>
);

export default AnimationFadeIn;
