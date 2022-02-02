import { TypePage } from '@types';
import React, { createContext, useMemo } from 'react';

type CareersProviderPropTypes = {
    careers: TypePage[] | null;
    children?: JSX.Element | JSX.Element[] | null;
};

// use TypePage instead of TypePageCareer so it can be used in links
// it seems like TypePageCareer should be interchangeable with TypePage, but it's like one level deeper
// not sure if types are correct here.
export const CareersContext = createContext<CareersProviderPropTypes>({ careers: null, children: null });

const CareersProvider = (props: CareersProviderPropTypes) => {
    const { careers = [], children } = props;

    const careersObj = useMemo(() => ({ careers }), [careers]);
    if (!children) return null;

    return <CareersContext.Provider value={careersObj}>{children}</CareersContext.Provider>;
};

export default CareersProvider;
