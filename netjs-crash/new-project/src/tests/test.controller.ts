import { Controller, Get } from "@nestjs/common";
import { CatService } from "src/cats/cat.service";
import { Cat } from "src/cats/interfaces/cat.interface";

@Controller('test')
export class TestController {
    constructor(private catsService: CatService) {}
    
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }
}
