/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';


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
      throw new ConflictException(`Disciplina com o nome '${createDisciplineDto.name}' já existe`);
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

  findAll(page: number) {
    if (page == 0) {
      return this.prisma.discipline.findMany({
        select: {
          id: true,
          name: true,
          content: {
            select: {
              name: true,
            },
          },
        },
      });
    } else if (page == 1) {
      return this.prisma.discipline.findMany({
        select: {
          id: true,
          name: true,
          content: {
            select: {
              name: true,
            },
          },
        },
        take: 20,
      });
    } else {
      return this.prisma.discipline.findMany({
        select: {
          id: true,
          name: true,
          content: {
            select: {
              name: true,
            },
          },
        },
        take: 20,
        skip: (page - 1) * 20,
      });
    }
  }

  async findOne(name: string) {
    const discipline = await this.prisma.discipline.findUnique({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
        content: {
          select: {
            name: true,
          },
        },
      },
    })

    const disciplineExists = await this.prisma.discipline.findUnique({
      where: {
        name: name,
      },
    });

    if (!disciplineExists) {
      throw new NotFoundException('Disciplina não existe');
    }

    return discipline;
  }

  async update(name: string, updateDisciplineDto: UpdateDisciplineDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: updateDisciplineDto.userId,
      },
    });

    if (!userExists) {
      throw new ConflictException('Id do usuário não existe')
    }

    const disciplineExists = await this.prisma.discipline.findFirst({
      where: {
        name: updateDisciplineDto.name,
      },
    });

    if (disciplineExists) {
      throw new ConflictException(`Disciplina com o nome '${updateDisciplineDto.name}' já existe`);
    }

    return await this.prisma.discipline.update({
      data: {
        ...updateDisciplineDto,
      },
      where: {
        name,
      },
    });
  }

  async remove(name: string) {
    const disciplineExists = await this.prisma.discipline.findUnique({
      where: {
        name,
      },
    });

    if (!disciplineExists) {
      throw new NotFoundException('Disciplina não existe');
    }

    await this.prisma.discipline.delete({
      where: {
        name,
      },
    });
  }
}
