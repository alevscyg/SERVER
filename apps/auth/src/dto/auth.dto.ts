import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class AuthDto {
    @ApiProperty({example: 'user@mail.ru',description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Gds238hg',description: 'Пароль'})
    @Length(4,16,{message:'Не меньше 4 и не больше 16'})
    readonly password: string;
}
