import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function createWithRelation() {
    const result = await prisma.teachers.create({
        data:{
            name: 'Pablo Lúcio',
            course: {
                connectOrCreate : {
                    where:{
                        name: 'React'
                    },
                    create:{
                        name: 'React 2.0',
                        description: 'React 2.0 description',
                        duration: 300
                    }
                }
            }
        }
    })

    console.log(result)
}

createWithRelation()
