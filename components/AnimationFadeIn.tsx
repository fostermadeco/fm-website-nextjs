import React from 'react';
import { motion } from 'framer-motion';

const AnimationFadeIn = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <motion.div
        layout
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
        }}
    >
        {children}
    </motion.div>
);

export default AnimationFadeIn;
