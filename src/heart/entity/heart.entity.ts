import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entity/user.entity";
import {Board} from "../../board/entity/board.entity";


@Entity()
export class Heart {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    userId : number

    @Column()
    boardId : number

    @ManyToOne(() => User)
    @JoinColumn({name : "userId"})
    user : User;

    @ManyToOne(() => Board)
    @JoinColumn({name : "boardId"})
    board : Board
}
