import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function create(){
    const result = await prisma.teachers.create({
        data:{
            name: "Pablo Silva",
            course: {
                
            }
        }
    })
    console.log(result)
}

create()