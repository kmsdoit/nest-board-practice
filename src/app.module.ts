import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { HeartModule } from './heart/heart.module';
import { CategoryModule } from './category/category.module';
import {ConfigModule} from "@nestjs/config";


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath : '.env',
    isGlobal : true
  }),
    BoardModule, TypeOrmModule.forRoot({
    type : 'postgres',
    host : process.env.POSTGRES_HOST,
    username : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DATABASE,
    synchronize : true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    logging : true
  }), UsersModule, HeartModule, CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
