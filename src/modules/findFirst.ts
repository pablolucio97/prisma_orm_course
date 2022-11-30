import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findFirst() {
    const result = await prisma.modules.findFirst()
    console.log(result)
}

findFirst()