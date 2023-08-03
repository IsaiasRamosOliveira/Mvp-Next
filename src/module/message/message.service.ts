import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { UpdateMessageDto } from './dtos/update-message.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(data: CreateMessageDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id: data.id_user
      }
    })
    if (!userExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Usuário não existe."
      })
    }
    const message = await this.prisma.message.create({
      data
    })
    return message;
  }

  async findAll() {
    const messages = await this.prisma.message.findMany();
    return messages;
  }

  async findOne(id: string) {
    const message = await this.prisma.message.findFirst({
      where: { id }
    })
    if (!message) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Mensagem não existe."
      })
    }
    return message;
  }

  async update(id: string, data: UpdateMessageDto) {
    const messageExists = await this.prisma.message.findFirst({
      where: { id }
    })
    if (!messageExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Mensagem não existe."
      })
    }
    const message = await this.prisma.message.update({
      where: { id },
      data
    })
    return message;
  }

  async remove(id: string) {
    const messageExists = await this.prisma.message.findFirst({
      where: { id }
    })
    if (!messageExists) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Mensagem não existe."
      })
    }
    await this.prisma.message.delete({
      where: { id }
    })
    return {
      id,
      message: `Mensagem apagada.`
    };
  }
}
