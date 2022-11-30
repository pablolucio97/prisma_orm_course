import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function createWithRelation() {
    const result = await prisma.courses.create({
        data:{
            name: 'GoLang',
            description: 'Back-end Google language',
            duration: 450,
            teacher : {
                create:{
                    name: 'Camila',
                }
            }
        },
    })

    console.log(result)
}

createWithRelation()