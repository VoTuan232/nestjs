import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { userInfo } from 'os';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from 'src/user/user.decorator';
import { CustomValidationPipe } from '../shared/validator.pipe';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('api/idea')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private readonly ideaService: IdeaService) {}

    private logData(options: any) {
        options.user && this.logger.log('USER' + JSON.stringify(options.user));
        options.data && this.logger.log('BODY' + JSON.stringify(options.data));
        options.id && this.logger.log('IDEA' + JSON.stringify(options.id));
    }

    // @Get('all')
    @Get()
    showAllIdea() {
        return this.ideaService.showAll();
    }

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
}
