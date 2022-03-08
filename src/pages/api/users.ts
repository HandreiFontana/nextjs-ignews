import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Handrei' },
        { id: 2, name: 'Milena' },
        { id: 3, name: 'Kauane' }
    ];

    return response.json(users);
}