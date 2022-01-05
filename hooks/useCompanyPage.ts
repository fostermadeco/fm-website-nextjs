import React from 'react';
import GET_LANDING_PAGES from '../api/queries/landingPages.graph';

const useCompanyPage = () => callContentful(GET_LANDING_PAGES);

export default useCompanyPage;
