import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        'bWgKGQicQCE2RSPuVnreFSTfFufcsiMEf4jViG-fTuSsezYOVEiRuzpDxXgi7slW',
    });
  }

  async validate(userName: string, password: string): Promise<any> {
    // console.log(userName, password);
    const user = await this.authService.validateUserCredentials(
      userName,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
