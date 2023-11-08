import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./entity/categoty.entity";

@Module({
    imports : [TypeOrmModule.forFeature([Category])]
})
export class CategoryModule {}
