import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "./entity/board.entity";
import {UsersModule} from "../users/users.module";
import {HeartModule} from "../heart/heart.module";

@Module({
  imports : [UsersModule,HeartModule, TypeOrmModule.forFeature([Board])],
  providers: [BoardService],
  controllers: [BoardController]
})
export class BoardModule {}
