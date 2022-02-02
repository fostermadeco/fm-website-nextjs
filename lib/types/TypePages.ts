import { TypePage } from './TypePage';
import { TypePageCareer } from './TypePageCareer';
import { TypePageCompany } from './TypePageCompany';
import { TypePageIndustry } from './TypePageIndustry';
import { TypePageLanding } from './TypePageLanding';
import { TypePageTechnology } from './TypePageTechnology';

export type TypePages = {
    page: TypePage | TypePageCareer | TypePageCompany | TypePageIndustry | TypePageTechnology | TypePageLanding;
};
