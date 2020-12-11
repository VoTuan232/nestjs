import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { IdeaEntity } from 'src/idea/idea.entity';

export class UserDTO {
    @ApiProperty({
        description: 'The name of user',
        type: String,
      })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'The password of user',
        type: String,
      })
    @IsNotEmpty()
    password: string;
}

export class UserRO {
    @ApiProperty({
        description: 'The id of user',
        type: String,
      })
    id: string;

    @ApiProperty({
        description: 'The username of user',
        type: String,
      })
    username; string;

    @ApiProperty({
        description: 'The created time when create user',
        type: Date,
      })
    created: Date;

    @ApiProperty({
        type: String,
      })
    token?: string;

    @ApiProperty({
        type: [IdeaEntity],
      })
    bookmarks?: IdeaEntity[];
}