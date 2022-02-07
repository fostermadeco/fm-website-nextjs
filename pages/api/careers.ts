import { getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const careers = await getPagesOfType({ pageContentType: PageContentTypes.Career });
    res.json(careers);
}
