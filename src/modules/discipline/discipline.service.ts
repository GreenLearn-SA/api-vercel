/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateDisciplineDto } from './dto/create-discipline.dto';


@Injectable()
export class DisciplineService {
  constructor(private prisma: PrismaService) { }

  async create(createDisciplineDto: CreateDisciplineDto) {
    const disciplineExists = await this.prisma.discipline.findFirst({
      where: {
        name: createDisciplineDto.name,
      },
    });

    if (disciplineExists) {
      throw new ConflictException('Matéria já existe');
    }

    const userExists = await this.prisma.user.findUnique({
      where: {
        id: createDisciplineDto.userId,
      },
    });

    if (!userExists) {
      throw new ConflictException('Id do usuário não existe')
    }

    await this.prisma.discipline.create({
      data: {
        ...createDisciplineDto,
      },
    });
  }
}
