import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function CreateData() {
    const result = await prisma.modules.create({
        data: {
            name: 'Working with context',
            description: 'How to use the React context api ',
            course: {
                connect: {
                    name: "React"
                }
            }
        }
    })

    console.log(result)
}

CreateData()