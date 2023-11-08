import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entity/user.entity";
import {Category} from "../../category/entity/categoty.entity";


@Entity()
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
    user : User

    @ManyToOne(() => Category, category => category.board)
    @JoinColumn({name : "categoryId"})
    category : Category
}
