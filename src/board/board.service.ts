import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Board} from "./entity/board.entity";
import {DataSource, Repository} from "typeorm";
import {CreateBoardDto} from "./dto/create-board.dto";
import {User} from "../users/entity/user.entity";
import {UsersService} from "../users/users.service";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board) private boardRepository : Repository<Board>,
        private dataSource : DataSource,
        private userService : UsersService
    ) {
    }

    async save(createBoardDto : CreateBoardDto, userId : number) {
        const {title, content} = createBoardDto
        const user = await this.userService.findById(userId)

        if (!user) {
            throw new NotFoundException('해당하는 유저를 찾을 수 없습니다')
        }
        const queryRunner = this.dataSource.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            const board = new Board()
            board.title = title
            board.content = content
            board.user = user
            const new_board = await this.boardRepository.save(board)
            await queryRunner.commitTransaction()
            return new_board
        }catch (err) {
            await queryRunner.rollbackTransaction()
            throw new BadRequestException('잘못된 요청입니다')
        }finally {
            await queryRunner.release()
        }
    }

    async findById(id : number) {
        const board = await this.boardRepository.findOne({
            where : {
                id
            }
        })

        if(!board) {
            throw new NotFoundException('해당하는 게시글을 조회할 수 없습니다')
        }
        await this.incrementViewCount(id)
        return board
    }

    private async incrementViewCount(id : number) {
        await this.boardRepository.increment({id}, 'view_count',1)
    }

}
