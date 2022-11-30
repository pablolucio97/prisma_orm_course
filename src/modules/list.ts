import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function list() {
    const result = await prisma.modules.findMany()
    console.log(result)
}

list()