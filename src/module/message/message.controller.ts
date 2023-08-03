import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { UpdateMessageDto } from './dtos/update-message.dto';
import { MessageService } from './message.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("messages")
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() data: CreateMessageDto) {
    return this.messageService.create(data);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMessageDto) {
    return this.messageService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
