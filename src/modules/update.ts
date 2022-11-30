import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function update() {
    const result = await prisma.modules.update({
        where: {
            id: '9e03571c-9993-4ff0-b501-f8a885105710'
        },
        data: {
            description: 'Using state and props',
        }
    })

    console.log(result)
}

update()