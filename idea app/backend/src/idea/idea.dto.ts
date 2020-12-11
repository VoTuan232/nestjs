import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { UserDTO, UserRO } from 'src/user/user.dto';
export class IdeaDTO {
    @ApiProperty({
        description: 'The name of idea',
        type: String,
        example: 'Idea 1',
      })
    @IsString()
    idea: string;

    @ApiProperty({
        description: 'The description of idea',
        type: String,
        example: 'Description 1',
      })
    @IsString()
    description: string;
}

export class IDeaRO {
    @ApiProperty({
        type: String,
        default: '1'
    })
    id?: string;

    @ApiProperty({
        type: Date
    })
    updated: Date;

    @ApiProperty({
        type: Date
    })
    created: Date;

    @ApiProperty({
        type: String
    })
    idea: string;

    @ApiProperty({
        type: String
    })
    description: string;

    @ApiProperty({
        type: UserRO
    })
    author?: UserRO;

    @ApiProperty({
        type: Number
    })
    upvotes?: number;

    @ApiProperty({
        type: Number
    })
    downvotes?: number;
}
