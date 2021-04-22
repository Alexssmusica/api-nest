import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';
import { hashPasswordTransform } from 'src/common/transformers/crypto-transform';
import { Type } from 'src/type/type.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
        transformer: hashPasswordTransform
    })
    @HideField()
    password: string;

    @Column({ name: 'type_id' })
    typeId: string;

    @ManyToOne(() => Type, { eager: true, nullable: true })
    // @Field(() => CreateTypeInput)
    @JoinColumn({ name: 'type_id' })
    type: Type;
}
