import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator"
export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message: "O campo de name não pode estar vázio." })
    name: string

    @IsEmail(undefined, { message: "O e-mail informado é inválido." })
    @IsNotEmpty({ message: "O campo de e-mail não pode estar vázio." })
    email: string

    @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres." })
    @IsNotEmpty({ message: "O campo de senha não pode estar vázio." })
    password: string
}
