import { PrismaClient, Prisma, Courses } from '@prisma/client'

const prisma = new PrismaClient()

async function queryRaw() {
    const result = await prisma.$queryRaw<Courses[]>(
        Prisma.sql`SELECT * FROM courses`
    )
    const filteredCourses = result.filter(c => c.duration > 300)
    console.log(filteredCourses)
}

queryRaw()