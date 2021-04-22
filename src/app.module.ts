import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeModule } from './type/type.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
            context: ({ req }) => ({ req })
        }),
        UserModule,
        AuthModule,
        TypeModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
