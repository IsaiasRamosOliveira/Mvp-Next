import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(data: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    if (userExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Usuário já existe."
      })
    }
    const user = await this.prisma.user.create({
      data
    })
    return user
  }

  async findAll() {
    const users = await this.prisma.user.findMany()
    return users
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      }
    })
    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Usuário não existe."
      })
    }
    return user
  }

  async update(id: string, data: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    })
    if (!userExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Usuário não existe."
      })
    }
    await this.prisma.user.update({
      where: {
        id
      },
      data
    })
    return { id, message: "Usuário atualizado" };
  }

  async remove(id: string) {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    })
    if (!userExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Usuário não existe."
      })
    }
    await this.prisma.user.delete({
      where: { id }
    })
    return { id, message: "Usuário deletado" };
  }
}
