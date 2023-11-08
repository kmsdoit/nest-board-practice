import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Heart} from "./entity/heart.entity";
import {Repository} from "typeorm";

@Injectable()
export class HeartService {
    constructor(@InjectRepository(Heart) private heartRepository : Repository<Heart>) {
    }

    async heartBoard(userId : number, boardId : number) {
        let heart = await this.heartRepository.findOne({
            where : {
                userId,
                boardId
            }
        })

        if (!heart) {
            heart = this.heartRepository.create({userId, boardId})
            await this.heartRepository.save(heart)
        }

        return heart
    }

    async unHeartBoard(userId:number , boardId : number) {
        return this.heartRepository.delete({userId, boardId})
    }

    async countHearts(boardId : number) {
        return await this.heartRepository.count({where : { boardId}})
    }
}
