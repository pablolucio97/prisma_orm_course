import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function create(){
    const result = await prisma.authors.create({
        data:{
            name: 'Robert Kyosaki',
            books:{
                createMany:{
                    data:[
                        {
                            name: 'Dad Rich Dad Poor'
                        },
                        {
                            name: 'Dad Rich Dad Poor For Youngs'
                        },
                    ]
                }
            }
        }
    })
    console.log(result)
}

create()