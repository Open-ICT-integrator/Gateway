import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './models/create-user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class UserController {
constructor(
    private readonly userService: UserService
    ) {}

    @UseGuards(AuthGuard)
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get(':name')
  getUser(@Param('name') name: string){
    return this.userService.findOne(name);
  }
}
