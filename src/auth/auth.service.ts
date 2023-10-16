import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async userLogin(req: any): Promise<any> {
    const user = await this.validateUserCredentials(
      req.body.email,
      req.body.password,
    );
    const tokenCredentials = await this.loginWithCredentials(user);
    return tokenCredentials;
  }

  async validateUserCredentials(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByFilter({
      email,
    });
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      return user;
    }
    throw new UnauthorizedException('email and password does not match');
  }

  async loginWithCredentials(user: any) {
    const payload = { email: user.email, userId: user._id };
    const accessToken = this.jwtService.sign(payload);
    return {
      userId: user._id,
      access_token: accessToken,
      expiresAt: Date.now() + 60000,
    };
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
  }
}
