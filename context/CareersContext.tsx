import { TypePageCareer } from '@types';
import React, { createContext, useMemo } from 'react';

type CareersProviderPropTypes = {
    careers: TypePageCareer[] | null;
    children?: JSX.Element | JSX.Element[] | null;
};

// not sure if types are correct here.
export const CareersContext = createContext<CareersProviderPropTypes>({ careers: null, children: null });

const CareersProvider = (props: CareersProviderPropTypes) => {
    const { careers = [], children } = props;

    const careersObj = useMemo(() => ({ careers }), [careers]);
    if (!children) return null;

    return <CareersContext.Provider value={careersObj}>{children}</CareersContext.Provider>;
};

export default CareersProvider;
