import LinkWrapper from '@components/LinkWrapper';
import { TypeBlockCareerListFields, TypePage } from '@types';
import { fetcher } from 'api/fetcher';
import React from 'react';
import useSWR from 'swr';

const CareerItem = (props: { career: TypePage }) => {
    // const career = props.career as TypePage;
    const { career } = props;

    return (
        <div className="py-5 border-t-2">
            <h5 className="text-3xl font-headline ">
                <LinkWrapper page={career}>
                    <a>{career.fields.name}</a>
                </LinkWrapper>
            </h5>
        </div>
    );
};

// const fetcher: Fetcher<TypePage[]> = (url: string) => fetch(url).then((res) => res.json());

const CareerList = ({ fields }: { fields: TypeBlockCareerListFields }) => {
    // const test = useContext(CareersContext);
    const { data, error } = useSWR<TypePage[], Error>('/api/careers', fetcher);
    console.log({ data });
    if (!fields.careerList) return null;

    const { overline, headerText } = fields.careerList.fields;

    console.log({ data });

    if (!data || data.length === 0 || error) return null;

    return (
        <div className="relative" id="open-positions">
            <div className="py-20 mx-6 md:py-40">
                <div className="block md:grid md:grid-cols-14">
                    <div className="col-span-4 col-start-2">
                        <h3 className="overline h5">{overline}</h3>
                        <p className="leading-tight h3">{headerText}</p>
                    </div>
                    <div className="col-span-8 col-start-6">
                        <ul>
                            {data.map((career: TypePage) => (
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
