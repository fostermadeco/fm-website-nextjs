import React from 'react';
import { TypeComponentBlockNumberedBlocksFields, TypeComponentFact } from '../../lib/types';

const NumberedBlocks = ({ fields }: { fields: TypeComponentBlockNumberedBlocksFields }) => {
    console.log({ fields });
    if (!fields) return null;

    return (
        <div className="container mx-auto my-14">
            <div className="mx-6 md:mx-0">
                <div className="grid grid-cols-1 gap-0 md:grid-cols-14 md:gap-6">
                    {fields.fact.map((f: TypeComponentFact, index) => {
                        // eslint-disable-next-line no-nested-ternary
                        const padding = index === 1 ? `md:mt-20` : index === 2 ? `md:mt-40` : '';
                        return (
                            <div
                                key={f.sys.id}
                                className={`pt-0 mb-8 col-span-4 ${padding} ${index === 0 ? 'col-start-2' : ''}`}
                            >
                                <h5 className="h5">0{index + 1}</h5>
                                <h4 className="h4">{f.fields.headerText}</h4>
                                <p className="p-xl font-light">{f.fields.fact}</p>
                            </div>
                        );
                    })}
                    <div />
                </div>
            </div>
        </div>
    );
};

export default NumberedBlocks;
