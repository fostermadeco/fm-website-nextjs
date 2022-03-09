import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            // when: 'beforeChildren',
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            // when: 'afterChildren',
        },
    },
};

const AmimationFadeLazy = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={variants}
    >
        {children}
    </motion.div>
);

export default AmimationFadeLazy;
