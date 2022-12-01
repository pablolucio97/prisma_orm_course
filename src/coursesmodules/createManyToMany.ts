import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function createManyToMany(){
    const result = await prisma.coursesModules.create({
        data:{
            fk_courses_id: "b98d8b1d-6741-4f75-bd2f-f329019d33b4",
            fk_modules_id: "6c1b42e9-c30f-48e0-8718-3614efff4518"
        }
    })

    console.log(result)
}

createManyToMany()