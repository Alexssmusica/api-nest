import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class CreateUserInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    typeId: string;

    // @IsOptional()
    // @IsObject()
    // type?: Type;
}
