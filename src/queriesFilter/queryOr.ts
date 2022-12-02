import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function query() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        startsWith: 'React'
                    }
                },
                {
                    name: {
                        startsWith: 'Typ'
                    }
                }
            ]
        }
    })

    console.log(result)
}

query()