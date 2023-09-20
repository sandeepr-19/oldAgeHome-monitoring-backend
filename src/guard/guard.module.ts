import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GuardService } from './guard.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:
        'bWgKGQicQCE2RSPuVnreFSTfFufcsiMEf4jViG-fTuSsezYOVEiRuzpDxXgi7slWY',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [GuardService],
  exports: [GuardService],
})
export class GuardModule {}
