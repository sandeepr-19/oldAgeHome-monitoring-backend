import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createUser')
  async createUser(@Body() userInput: CreateUserDto): Promise<any> {
    return await this.usersService.createUser(userInput);
  }
}
