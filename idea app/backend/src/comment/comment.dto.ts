import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CommentDTO {
    @ApiProperty({
        description: 'The comment of idea',
        type: String,
      })
    @IsString()
    comment: string;
}