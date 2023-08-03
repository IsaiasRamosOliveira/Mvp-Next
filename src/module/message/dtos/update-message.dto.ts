import { PartialType } from '@nestjs/swagger';
import { CreateMessageDto } from './create-message.dto';
import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail } from "class-validator"

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "ana@gmail.com"
    })
    @IsString({
        message: 'O campo de destinatário não pode estar vazio.'
    })
    @IsEmail(undefined, { message: "o campo de email não pode estar vazio." })
    @IsNotEmpty()
    to: string

    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "Isaías Ramos"
    })
    @IsNotEmpty()
    @IsString({
        message: "O campo de proprietário não pode estar vazio."
    })
    from: string

    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "Descrição da mensagem."
    })
    @IsNotEmpty()
    @IsString({
        message: "O campo de descrição não pode estar vazio."
    })
    body: string
}
