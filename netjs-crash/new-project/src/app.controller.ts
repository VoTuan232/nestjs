import { Body, Controller, Get, Header, HttpCode, Param, Post, Redirect, Req, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './cats/dto/create-cat.dto';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}
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
