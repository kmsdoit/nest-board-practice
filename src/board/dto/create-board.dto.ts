import {IsNumber, IsString, MaxLength, MinLength} from "class-validator";


export class CreateBoardDto {
    @IsString()
    @MaxLength(50)
    title : string

    @IsString()
    @MaxLength(3000)
    content : string
}
