import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/users.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    userName: string,
    password: string,
  ): Promise<any> {
    const user = await this.usersService.getUserByFilter({
      userName,
      password,
    });
    return user ?? null;
  }

  async loginWithCredentials(user: any) {
    console.log(user);
    const payload = { userName: user.userName, userId: user._id };
    const a = this.jwtService.sign(payload);
    console.log(a);
    return {
      username: user.userName,
      access_token: a,
      expiredAt: Date.now() + 60000,
    };
  }
}
