import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


async function create(){
    const result = await prisma.authors.create({
        data: {
            name: 'Timmothy Ferris'
        }
    })

    console.log(result)
}

create()