import type { NextApiRequest, NextApiResponse } from 'next';
import { CompanyProvider } from '../../../data';

/**
 * Paginate the companies.
 * @param req
 * @param res
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { page, q, specialities } = req.query;
    try {
        const data = await CompanyProvider.pagination(
            page ? parseInt(page.toString()) : 1,
            q?.toString(),
            specialities?.toString().split(',')
        );
        res.status(200).json({ data });
    } catch (e) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
}
