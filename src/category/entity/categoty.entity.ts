import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entity/board.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @OneToMany(() => Board, board => board.category)
    board : Board[];
}
