import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, SetMetadata, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)  
// @UseFilters(new HttpExceptionFilter())
export class CatController {
    constructor(private catsService: CatService) {}

    @Post()
    @Roles('admin')
    // createCatSchema
    // @UsePipes(new JoiValidationPipe(createCatSchema))
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    // @UseFilters(new HttpExceptionFilter())
    async findAll(): Promise<Cat[]> {
      // throw new ForbiddenException();
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
      return `This action returns a #${id} cat`;
    }
}
