import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules /users/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'zwh198797',
      database: 'water',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
