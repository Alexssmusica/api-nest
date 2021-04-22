import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeInput } from './dto/dto/create-type.input';
import { UpdateTypeInput } from './dto/dto/update-type.input';
import { Type } from './type.entity';

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ) {}

    async createType(data: CreateTypeInput): Promise<Type> {
        const type = this.typeRepository.create(data);
        return this.typeRepository.save(type);
    }

    async getTypeById(id: string): Promise<Type> {
        const type = await this.typeRepository.findOne(id);
        if (!type) {
            throw new NotFoundException('Type not found');
        }
        return type;
    }

    async findAllTypes(): Promise<Type[]> {
        return await this.typeRepository.find();
    }

    async updateType(data: UpdateTypeInput): Promise<Type> {
        const type = await this.getTypeById(data.id);
        return this.typeRepository.save({ ...type, ...data });
    }
}
