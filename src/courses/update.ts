import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function update() {
    const result = await prisma.courses.update({
        where: {
            id: '526d0bcd-4967-429d-8b11-daf7fafbdb01'
        },
        data: {
            duration: 600,
            name: 'Java 2023'
        }
    })

    console.log(result)
}

update()