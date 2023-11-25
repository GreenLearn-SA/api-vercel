/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      id: 'ec071bc5-d803-4c7c-9131-320c656a71c0',
      firstName: 'Pedro',
      lastName: 'Nieto',
      username: 'PedrooNietoo',
      email: 'pedronieto.2005@gmail.com',
      password: 'SenhaForte123!',
      isManager: false,
    },
    {
      id: 'ec071bc5-d803-4c7c-9131-320c656a71c1',
      firstName: 'Ashlyn',
      lastName: 'Iero',
      username: 'AshlynIero',
      email: 'ashlynierow@gmail.com',
      password: 'SenhaForte123!',
      isManager: false,
    },
    {
      id: 'ec071bc5-d803-4c7c-9131-320c656a71c2',
      firstName: 'Bernardo',
      lastName: 'Mattos',
      username: 'BernardoMattos',
      email: 'bernardomtt2@gmail.com',
      password: 'SenhaForte123!',
      isManager: false,
    },
    {
      id: 'ec071bc5-d803-4c7c-9131-320c656a71c3',
      firstName: 'Usuário',
      lastName: 'Administrador',
      username: 'admin',
      email: 'admin@greenlearn.com',
      password: 'Admin12!',
      isManager: false,
    },
  ];

  for (const user of users) {
    const salt = await bcrypt.genSalt();
    const hash: string = await bcrypt.hash(user.password, salt);

    try {
      await prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          password: hash,
        },
      });
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target.includes('username')) {
        console.error(`Username "${user.username}" already exists. Skipping.`);
      } else {
        console.error(error);
        process.exit(1);
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
