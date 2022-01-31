import { TypeComponentBlockCareerListFields, TypePageJob } from '@types';
import { CareersContext } from 'context/CareersContext';
import React, { useContext } from 'react';

const CareerItem = (props: { career: TypePageJob }) => {
    const { career } = props;
    return (
        <div className="py-5 border-t-2">
            <h5 className="text-3xl font-headline ">{career.fields.name}</h5>
        </div>
    );
};

const CareerList = ({ fields }: { fields: TypeComponentBlockCareerListFields }) => {
    const { careers } = useContext(CareersContext);
    const { overline, headerText } = fields.careerList.fields;
    console.log({ careers, fields });

    if (!careers || careers.length === 0) return null;

    return (
        <div className="relative">
            <div className="py-20 mx-6 md:py-40">
                <div className="block md:grid md:grid-cols-14">
                    <div className="col-span-4 col-start-2">
                        <h3 className="overline h5">{overline}</h3>
                        <p className="leading-tight h3">{headerText}</p>
                    </div>
                    <div className="col-span-8 col-start-6">
                        <ul>
                            {careers.map((career: TypePageJob) => (
                                <li key={`career-list-item-${career.sys.id}}`}>
                                    <CareerItem career={career} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerList;
