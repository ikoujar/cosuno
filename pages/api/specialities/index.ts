import type { NextApiRequest, NextApiResponse } from 'next';
import { SpecialityProvider } from '../../../data';

/**
 * Paginate the companies.
 * @param req
 * @param res
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { page, q } = req.query;
    try {
        const data = await SpecialityProvider.all();
        res.status(200).json({ data });
    } catch (e) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
}
