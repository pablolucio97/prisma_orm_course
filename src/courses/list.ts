import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function list() {
    const result = await prisma.courses.findMany()
    console.log(result)
}

list()