import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entity/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

    async save(createUserDto : CreateUserDto) {
        return await this.userRepository.save(createUserDto)
    }

    async findById(userId : number) {
        return await this.userRepository.findOne({
            where : {
                id : userId
            }
        })
    }
}
