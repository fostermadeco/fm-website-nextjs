import React from 'react';
import { TypeBlockNumberedBlocks, TypeBlockNumberedBlocksFields, TypeFact } from '@types';
import AmimationFadeLazy from '@components/AnimationFadeLazy';
import { motion } from 'framer-motion';

type NumberedBlocksProps = {
    fields: TypeBlockNumberedBlocksFields;
    mode?: 'dark' | 'light';
};

const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const NumberedBlocks = (props: NumberedBlocksProps) => {
    const { fields, mode = 'light' } = props;
    if (!fields || !fields.fact) return null;

    const textColor = mode === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className="relative">
            <div className="my-4 md:mt-20 md:mb-40">
                <AmimationFadeLazy>
                    <div className="container">
                        <div className="grid grid-cols-14 xl:block">
                            <div className="col-span-12 col-start-2">
                                <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-8 xl:grid-cols-14">
                                    {fields.fact.map((f: TypeFact, index) => {
                                        // eslint-disable-next-line no-nested-ternary
                                        const padding = index === 1 ? `md:mt-20` : index === 2 ? `md:mt-40` : '';
                                        return (
                                            <motion.div
                                                variants={item}
                                                key={f.sys.id}
                                                className={`pt-0 mb-8 col-span-1 xl:col-span-4 ${padding} ${
                                                    index === 0 ? 'xl:col-start-2' : ''
                                                }`}
                                            >
                                                <h5 className={`h5 overline ${textColor}`}>0{index + 1}</h5>
                                                <h4 className={`h4 ${textColor}`}>{f.fields.header}</h4>
                                                <p className={`font-light p-xl ${textColor}`}>{f.fields.fact}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </AmimationFadeLazy>
            </div>
        </div>
    );
};

export default NumberedBlocks;
