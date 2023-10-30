/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  async create(createContentDto: CreateContentDto) {
    const contentExists = await this.prisma.content.findFirst({
      where: {
        name: createContentDto.name,
      },
    });

    if (contentExists) {
      throw new ConflictException(
        `Conteúdo com o nome '${createContentDto.name}' já existe`,
      );
    }

    const disciplineExists = await this.prisma.discipline.findUnique({
      where: {
        id: createContentDto.disciplineId,
      },
    });

    if (!disciplineExists) {
      throw new ConflictException('Id da disciplina não existe');
    }

    await this.prisma.content.create({
      data: {
        ...createContentDto,
      },
    });
  }

  findAll(page: number) {
    if (page == 0) {
      return this.prisma.content.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } else if (page == 1) {
      return this.prisma.content.findMany({
        select: {
          id: true,
          name: true,
        },
        take: 20,
      });
    } else {
      return this.prisma.content.findMany({
        select: {
          id: true,
          name: true,
        },
        take: 20,
        skip: (page - 1) * 20,
      });
    }
  }

  async findOne(name: string) {
    const content = await this.prisma.content.findUnique({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    const contentExists = await this.prisma.content.findUnique({
      where: {
        name: name,
      },
    });

    if (!contentExists) {
      throw new NotFoundException('Conteúdo não existe');
    }

    return content;
  }

  async update(name: string, updateContentDto: UpdateContentDto) {
    const contentExists = await this.prisma.content.findFirst({
      where: {
        name: updateContentDto.name,
      },
    });

    if (contentExists) {
      throw new ConflictException(
        `Conteúdo com o nome '${updateContentDto.name}' já existe`,
      );
    }

    const disciplineExists = await this.prisma.discipline.findUnique({
      where: {
        id: updateContentDto.disciplineId,
      },
    });

    if (!disciplineExists) {
      throw new ConflictException('Id da disciplina não existe');
    }

    return await this.prisma.content.update({
      data: {
        ...updateContentDto,
      },
      where: {
        name,
      },
    });
  }

  async remove(name: string) {
    const contentExists = await this.prisma.content.findUnique({
      where: {
        name,
      },
    });

    if (!contentExists) {
      throw new NotFoundException('Conteúdo não existe');
    }

    await this.prisma.content.delete({
      where: {
        name,
      },
    });
  }
}
