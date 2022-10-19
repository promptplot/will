import type { NextApiRequest , NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse ) => {
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Metod Not Allowed' });
    }

    const formData = JSON.parse(req.body);

    const savedForm = await prisma.formData.create({
        data: formData
    })
    
    res.json(savedForm)
}