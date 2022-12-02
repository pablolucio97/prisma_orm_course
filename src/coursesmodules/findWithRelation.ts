import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findWithRelation() {
    const result = await prisma.coursesModules.findMany({
        include: {
            courses: true,
            modules: true,
        }
    })
    console.log(result)
}

findWithRelation()