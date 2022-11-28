import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Electron',
            description: 'Desktop apps course',
            duration: 120
        }
    })

    console.log(result)
}

main()