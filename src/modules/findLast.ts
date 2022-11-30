import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findLast() {
    const result = await prisma.modules.findFirst({
        take: -1
    })
    console.log(result)
}

findLast()