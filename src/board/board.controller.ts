import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {CreateBoardDto} from "./dto/create-board.dto";
import {BoardService} from "./board.service";
import {HeartService} from "../heart/heart.service";

@Controller('board')
export class BoardController {

    constructor(
        private readonly boardService : BoardService,
        private readonly heartService : HeartService
    ) {
    }

    @Post('/save/:userId')
    async save(@Body() createBoardDto : CreateBoardDto, @Param('userId', new ParseIntPipe()) userId : number) {
        return await this.boardService.save(createBoardDto, userId)
    }

    @Get('/:id')
    async findById(@Param('id', ParseIntPipe) id : number) {
        return await this.boardService.findById(id)
    }

    @Post(':id/heart')
    likePost(@Body('userId') userId: number, @Param('id') boardId: number) {
        return this.heartService.heartBoard(userId, boardId);
    }

    // 좋아요 취소
    @Delete(':id/heart')
    unlikePost(@Body('userId') userId: number, @Param('id') boardId: number) {
        return this.heartService.unHeartBoard(userId, boardId);
    }

    // 좋아요 수 조회
    @Get(':id/heart/count')
    countLikes(@Param('id') boardId: number) {
        return this.heartService.countHearts(boardId);
    }
}
