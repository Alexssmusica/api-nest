import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTypeInput {
    @IsString()
    @IsOptional()
    @IsNotEmpty({ message: 'Invalid characters' })
    id?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name?: string;
}
