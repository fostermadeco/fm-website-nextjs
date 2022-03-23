import { getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const caseStudy = await getPagesOfType({ pageContentType: PageContentTypes.CaseStudy });
    res.json(caseStudy);
}
