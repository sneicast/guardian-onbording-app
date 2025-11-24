import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {

    @IsString({ message: 'El username debe ser un string' })
    @IsNotEmpty({ message: 'El username es requerido' })
    @MinLength(3, { message: 'El username debe tener al menos 3 caracteres' })
    @MaxLength(20, { message: 'El username debe tener menos de 20 caracteres' })
    username: string;

    @IsString({ message: 'La contraseña debe ser un string' })
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @MinLength(4, { message: 'La contraseña debe tener al menos 4 caracteres' })
    @MaxLength(20, { message: 'La contraseña debe tener menos de 20 caracteres' })
    password: string;
}
