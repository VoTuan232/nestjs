import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query, UseGuards, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiPropertyOptional, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { userInfo } from 'os';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from 'src/user/user.decorator';
import { CustomValidationPipe } from '../shared/validator.pipe';
import { IdeaDTO, IDeaRO } from './idea.dto';
import { IdeaEntity } from './idea.entity';
import { IdeaService } from './idea.service';

@ApiTags('ideas')
@Controller('api/ideas')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private readonly ideaService: IdeaService) {}

    private logData(options: any) {
        options.user && this.logger.log('USER' + JSON.stringify(options.user));
        options.data && this.logger.log('BODY' + JSON.stringify(options.data));
        options.id && this.logger.log('IDEA' + JSON.stringify(options.id));
    }

    // @Get('all')
    @ApiOperation({summary: 'Get All Ideas'})
    @ApiResponse({ status: 200, description: 'The ideas has been successfully read.',  type: [IDeaRO],})
    @Get()
    showAllIdea(@Query('page') page: number) {
        return this.ideaService.showAll(page);
    }

    @Get('newest')
    showNewestIdeas(@Query('page') page: number) {
        return this.ideaService.showAll(page, true);
    }

    @ApiBody({ type: IdeaDTO})
    @ApiBearerAuth()
    // @ApiResponse({ status: 201, description: 'The ideas has been successfully created.'})
    // @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiCreatedResponse({ description: 'The ideas has been successfully created.', type: IDeaRO})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @Post()
    @UseGuards(new AuthGuard())
    @UsePipes(new CustomValidationPipe())
    createIdea(@User('id') user, @Body() data: IdeaDTO) {
        // this.logger.log(JSON.stringify(data))
        this.logData({user, data})
        return this.ideaService.create(user, data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        return this.ideaService.read(id);
    }

    @ApiBody({ type: IdeaDTO})
    @Put(':id')
    @UseGuards(new AuthGuard())
    @UsePipes(new CustomValidationPipe())
    updateIdea(@Param('id') id: string,@User('id') user, @Body() data: Partial<IdeaDTO>) {
        // this.logger.log(JSON.stringify(data))
        this.logData({id, user, data})
        return this.ideaService.update(id, user, data);
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    deleteIdea(@Param('id') id: string, @User() user) {
        this.logData({id, user})
        return this.ideaService.delete(id, user);
    }

    @Post(':id/bookmark')
    @UseGuards(new AuthGuard())
    bookmarkIdea(@Param('id') id: string, @User('id') user: string) {
        this.logData({id, user})
        return this.ideaService.bookmark(id, user);
    }

    @Delete(':id/bookmark')
    @UseGuards(new AuthGuard())
    unbookmarkIdea(@Param('id') id: string, @User('id') user: string) {
        this.logData({id, user})
        return this.ideaService.unbookmark(id, user);
    }

    @Post(':id/upvote')
    @UseGuards(new AuthGuard())
    upvoteIdea(@Param('id') id: string, @User('id') user: string) {
        this.logData({id, user});
        return this.ideaService.upvote(id, user);
    }

    @Post(':id/downvote')
    @UseGuards(new AuthGuard())
    downvoteIdea(@Param('id') id: string, @User('id') user: string) {
        this.logData({id, user});
        return this.ideaService.downvote(id, user);
    }
}
