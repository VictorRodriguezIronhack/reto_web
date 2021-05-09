const { PrismaClient } = require('@prisma/client');
const phonesData = require('../src/data/phones.json');

const prisma = new PrismaClient()


async function main() {
    const newPhone = await prisma.phone.create(phonesData)
    const allPhones = await prisma.phone.findMany() 
}


main()
    .catch(error => {
        throw error
    })
    .finally(async () => {
        await prisma.$disconnect()
    })