import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "Isaías Ramos"
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: "O envio dos dados tem que seguir o exemplo.",
        example: "isaias@gmail.com"
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: "A senha deve conter mais de 6 caracteres.",
        example: "123456"
    })
    @IsString()
    @IsNotEmpty()
    password?: string;
}
