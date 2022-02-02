/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import stringify from 'fast-safe-stringify';

import { TypePage } from './types';

export const parsePage = (page: unknown): TypePage =>
    // Kill circular references
    JSON.parse(stringify(page)) as TypePage;
