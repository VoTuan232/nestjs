import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CustomValidationPipe } from '../shared/validator.pipe';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('api/idea')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private readonly ideaService: IdeaService) {}

    // @Get('all')
    @Get()
    showAllIdea() {
        return this.ideaService.showAll();
    }

    @Post()
    @UsePipes(new CustomValidationPipe())
    createIdea(@Body() data: IdeaDTO) {
        this.logger.log(JSON.stringify(data))
        return this.ideaService.create(data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        return this.ideaService.read(id);
    }

    @Put(':id')
    @UsePipes(new CustomValidationPipe())
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        this.logger.log(JSON.stringify(data))
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    deleteIdea(@Param('id') id: string) {
        return this.ideaService.delete(id);
    }
}
