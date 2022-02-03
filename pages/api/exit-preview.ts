import { NextApiRequest, NextApiResponse } from 'next';

const Exit = (req: NextApiRequest, res: NextApiResponse) => {
    const { redirectTo } = req.query;
    const location = redirectTo || '/';

    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData();

    // Redirect the user back to the index page.
    res.writeHead(307, { Location: location });
    res.end();
};

export default Exit;
