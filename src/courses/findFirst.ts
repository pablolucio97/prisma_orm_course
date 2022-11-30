import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findFirst() {
    const result = await prisma.courses.findFirst()
    console.log(result)
}

findFirst()