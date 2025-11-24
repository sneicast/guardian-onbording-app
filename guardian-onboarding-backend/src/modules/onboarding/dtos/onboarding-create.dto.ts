import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class OnboardingCreateDto {
    @IsString({message: 'El nombre debe ser un string'})
    @IsNotEmpty({message: 'El nombre es requerido'})
    @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
    @MaxLength(20, {message: 'El nombre debe tener menos de 20 caracteres'})
    name: string;

    @IsString({message: 'El número de documento debe ser un string'})
    @IsNotEmpty({message: 'El número de documento es requerido'})
    @MinLength(5, {message: 'El número de documento debe tener al menos 5 caracteres'})
    @MaxLength(12, {message: 'El número de documento debe tener menos de 12 caracteres'})
    documentNumber: string;

    @IsEmail({}, {message: 'El email debe ser un email válido'})
    @IsNotEmpty({message: 'El email es requerido'})
    email: string;

    @IsNumber({}, {message: 'El monto debe ser un número'})
    @IsNotEmpty({message: 'El monto es requerido'})
    @Min(100000, {message: 'El monto debe ser mayor a 100000'})
    amount: number;
}