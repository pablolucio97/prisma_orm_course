import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function deleteData(){
    const result = await prisma.coursesModules.delete({
        where:{
            id : "8651c21a-ac9a-4763-b57b-4a9362435b22"
        }
    })

    console.log(result)
}

deleteData()