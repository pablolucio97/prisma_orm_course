import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function query(){
    const result = await prisma.courses.findMany({
        where: {
            name:{
                startsWith: 'React'
            }
        }
    })

    console.log(result)
}

query()