import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { HeartModule } from './heart/heart.module';


@Module({
  imports: [BoardModule, TypeOrmModule.forRoot({
    type : 'postgres',
    host : 'localhost',
    username : 'nest',
    password : 'nest',
    database : 'nest',
    synchronize : true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    logging : true
  }), UsersModule, HeartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
