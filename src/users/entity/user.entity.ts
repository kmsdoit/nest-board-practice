import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entity/board.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    email : string

    @Column()
    name : string

    @OneToMany(() => Board , board => board.userId)
    boards : Board[]
}
