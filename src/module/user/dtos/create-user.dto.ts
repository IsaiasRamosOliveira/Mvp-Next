import { ApiProperty } from "@nestjs/swagger"
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator"
export class CreateUserDto {

    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "Isaías Ramos"
    })
    @IsString()
    @IsNotEmpty({ message: "O campo de name não pode estar vázio." })
    name: string

    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "isaias@gmail.com"
    })
    @IsEmail(undefined, { message: "O e-mail informado é inválido." })
    @IsNotEmpty({ message: "O campo de e-mail não pode estar vázio." })
    email: string

    @ApiProperty({
        description: "A senha deve conter mais de 6 caracteres.",
        example: "123456"
    })
    @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres." })
    @IsNotEmpty({ message: "O campo de senha não pode estar vázio." })
    password: string
}
