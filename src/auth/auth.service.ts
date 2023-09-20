import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/users.schema';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    userName: string,
    password: string,
  ): Promise<any> {
    const user = await this.usersService.getUserByFilter({
      userName,
    });

    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      return user;
    }
    return null;
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

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
  }
}
