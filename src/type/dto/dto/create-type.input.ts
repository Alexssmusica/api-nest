import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTypeInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    id: string;
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name: string;
}
