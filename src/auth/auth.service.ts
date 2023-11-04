/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../database/PrismaService';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.userService.findInfos(username);

    const userExists = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existente');
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: pass,
      };
      return await this.jwtService.signAsync(payload);
    } else {
      throw new UnauthorizedException('Senha incorreta');
    }
  }
}
