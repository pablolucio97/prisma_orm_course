import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function CreateData() {
    const result = await prisma.courses.create({
        data: {
            name: 'Java',
            description: 'Multifunctional language course',
            duration: 300
        }
    })

    console.log(result)
}

CreateData()