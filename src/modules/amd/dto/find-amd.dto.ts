import { IsInt, IsString,IsNumber } from 'class-validator';
export class FindAmdDto {
    @IsInt()
    age: string;
}   