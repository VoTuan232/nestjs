import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/shared/auth.guard';
import { CustomValidationPipe } from 'src/shared/validator.pipe';
import { User } from 'src/user/user.decorator';
import { CommentDTO } from './comment.dto';
import { CommentService } from './comment.service';

@ApiTags('comments')
@Controller('api/comment')
export class CommentController {
    constructor(private commentService: CommentService) {
    }

    @Get('idea/:id')
    showCommentsByIdea(@Param('id') idea: string) {
        return this.commentService.showByIdea(idea);
    }

    @Get('user/:id')
    showCommentByUser(@Param('id') user: string) {
        return this.commentService.showByUser(user);
    }

    @Post('idea/:id')
    @UseGuards(new AuthGuard())
    @UsePipes(new CustomValidationPipe())
    createComment(@Param('id') idea: string, @User('id') user: string, @Body() data: CommentDTO) {
        return this.commentService.create(idea, user, data);
    }

    @Put(':id')
    @UseGuards(new AuthGuard())
    @UsePipes(new CustomValidationPipe())
    updateComment(@Param('id') comment: string, @User('id') user: string, @Body() data: Partial<CommentDTO>) {
        return this.commentService.update(comment, user, data)
    }

    @Get(':id')
    showComment(@Param('id') idea: string) {
        return this.commentService.show(idea);
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    destroyComment(@Param('id') comment: string, @User('id') user: string) {
        return this.commentService.delete(comment, user)
    }
}
