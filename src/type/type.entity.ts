import { ObjectType, Field, ArgsType } from '@nestjs/graphql';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@ObjectType()
@ArgsType()
@Entity()
export class Type {
    @PrimaryColumn({ name: 'id', type: 'varchar' })
    @Field()
    id: string;

    @Column()
    name: string;
}
