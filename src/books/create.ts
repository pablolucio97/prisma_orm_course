import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function create() {
    const result = await prisma.books.create({
        data: {
            name: 'Work four hours by week',
            author_id: 'bf506903-390e-423e-8d60-fb862039aa95'
        }

    })
    console.log(result)
}

create()