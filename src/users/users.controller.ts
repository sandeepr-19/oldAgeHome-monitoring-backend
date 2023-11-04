import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Post('/createUser')
  async createUser(@Body() userInput: CreateUserDto): Promise<any> {
    return await this.usersService.createUser(userInput);
  }

  // @UseGuards(AuthGuard)
  @Post('/updateFcmToken')
  async updateFcmToken(
    @Body() updateUserInput: UpdateUserDto,
    @Req() request: any,
  ): Promise<any> {
    return await this.usersService.updateFcmToken(
      updateUserInput.fcmToken,
      request.headers.userid,
    );
  }
}
