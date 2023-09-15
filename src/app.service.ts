import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users/dto/createUser.dto';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
