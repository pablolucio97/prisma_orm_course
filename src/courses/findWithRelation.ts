import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findWithRelation() {
    const result = await prisma.courses.findMany({
        include: {
            teacher: true
        }
    })

    console.log(result)
}

findWithRelation()