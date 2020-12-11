import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '../shared/auth.guard';
import { CustomValidationPipe } from 'src/shared/validator.pipe';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  @UseGuards(new AuthGuard())
  showAllUsers(@User() user) {
    console.log('[user]', user);
    return this.userService.showAll();
  }

  @Post('auth/login')
  @UsePipes(new CustomValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post('auth/register')
  @UsePipes(new CustomValidationPipe())
  register(@Body() data) {
    return this.userService.register(data);
  }

  @Get('api/users/:username')
  showOneUser(@Param('username') username: string) {
    return this.userService.read(username);
  }

  @Get('auth/whoami')
  @UseGuards(new AuthGuard())
  showMe(@User('username') username: string) {
    return this.userService.read(username);
  }
}
