import { IsString } from 'class-validator';
import { UserDTO, UserRO } from 'src/user/user.dto';
export class IdeaDTO {
    @IsString()
    idea: string;

    @IsString()
    description: string;
}

export class IDeaRO {
    id?: string;
    updated: Date;
    created: Date;
    idea: string;
    description: string;
    author?: UserRO;
    upvotes?: number;
    downvotes?: number;
}