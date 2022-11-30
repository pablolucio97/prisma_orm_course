import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function CreateData() {
    const result = await prisma.courses.create({
        data: {
            name: 'React',
            description: 'Web Framework',
            duration: 340
        }
    })

    console.log(result)
}

CreateData()