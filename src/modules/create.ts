import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function CreateData() {
    const result = await prisma.modules.create({
        data: {
            name: 'State and Props',
            description: 'How to use state and props',
        }
    })

    console.log(result)
}

CreateData()