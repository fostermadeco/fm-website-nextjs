import { getPageBySlug } from '@api';
import { TypePage } from '@types';
import { getLinkToForPage } from 'lib/routes';
import { NextApiRequest, NextApiResponse } from 'next';

// http://localhost:3000/api/preview?secret=preview&slug=company
export default async function preview(req: NextApiRequest, res: NextApiResponse) {
    const { secret, slug } = req.query;
    console.log(req.query);

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    const page = (await getPageBySlug({ slug, preview: true })) as TypePage;
    console.log({ page });

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!page) {
        return res.status(401).json({ message: 'Invalid slug' });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // res.writeHead(307, { Location: `/posts/${post.slug}` })
    const { as } = getLinkToForPage({ page });
    res.setHeader('Content-Type', 'text/html');
    res.write(
        `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${as}" />
    <script>window.location.href = '${as}'</script>
    </head>
    </html>`
    );
    res.end();
}
