import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entity/user.entity";


@Entity({name : 'Board'})
export class Board {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    title : string

    @Column()
    content : string

    @Column({default : 0})
    view_count : number

    @Column({default : 0})
    like_count : number

    @ManyToOne(() => User, user => user.boards)
    userId : User
}
