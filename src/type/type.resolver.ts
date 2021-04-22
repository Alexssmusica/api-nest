import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTypeInput } from './dto/dto/create-type.input';
import { UpdateTypeInput } from './dto/dto/update-type.input';
import { Type } from './type.entity';
import { TypeService } from './type.service';

@Resolver()
export class TypeResolver {
    constructor(private readonly typeService: TypeService) {}

    @Mutation(() => Type)
    async createType(@Args('data') data: CreateTypeInput): Promise<Type> {
        return this.typeService.createType(data);
    }

    @Query(() => [Type])
    async types(): Promise<Type[]> {
        return await this.typeService.findAllTypes();
    }

    @Mutation(() => Type)
    async updateType(@Args('id') id: string, @Args('data') data: UpdateTypeInput): Promise<Type> {
        return this.typeService.updateType({ id, ...data });
    }
}
