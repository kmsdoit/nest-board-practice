import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Heart} from "./entity/heart.entity";
import { HeartService } from './heart.service';

@Module({
    imports : [TypeOrmModule.forFeature([Heart])],
    providers: [HeartService],
    exports : [HeartService]
})
export class HeartModule {}
