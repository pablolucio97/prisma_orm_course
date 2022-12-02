import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function pagination() {

    let skip = 0
    let exists = true

    while (exists) {
        const result = await prisma.courses.findMany({
            skip,
            take: 2
        })

        skip += 2

        console.log('-------------------')

        if (result.length <= 0) {
            exists = false
        }
        console.log(result)
    }
}

pagination()