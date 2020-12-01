import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CustomValidationPipe } from 'src/shared/validator.pipe';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('api/user') 
    showAllUsers() {
        return this.userService.showAll();
    }

    @Post('login')
    @UsePipes(new CustomValidationPipe())
    login(@Body() data: UserDTO) {
        return this.userService.login(data);
    }

    @Post('register')
    @UsePipes(new CustomValidationPipe())
    register(@Body() data) {
        return this.userService.register(data);
    }
}
