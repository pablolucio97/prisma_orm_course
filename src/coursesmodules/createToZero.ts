import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function createToZero(){
    const result = await prisma.coursesModules.create({
        data:{
            courses:{
                create:{
                    name: 'React Native',
                    description: 'Mobile course',
                    duration: 350
                }
            },
            modules:{
                create:{
                    name: 'Starting on React Native',
                    description: 'How to create a React Native project',
                }
            }
        }
    })

    console.log(result)
}

createToZero()