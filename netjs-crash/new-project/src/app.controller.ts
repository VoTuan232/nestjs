import { Body, Controller, Get, Header, HttpCode, Param, Post, Redirect, Req, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cats/dto/create-cat.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local')) 
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
  
  // @Post()
  // @HttpCode(201)
  // @Header('Cache-Control', 'none')
  // create(@Body() createCatDto: CreateCatDto): string {
  //   return `This action adds a new cat ${createCatDto.name}`;
  // }

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(): string {
  //   return 'This action returns all cats';
  // }

  // @Get(':id')
  // findOne(@Param  () params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }
}
