import { getPagesOfType } from '@api';
import { PageContentTypes } from '@constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const people = await getPagesOfType({ pageContentType: PageContentTypes.Person });
    res.json(people);
}
