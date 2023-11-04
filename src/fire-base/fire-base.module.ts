import { Module } from '@nestjs/common';
import { FireBaseService } from './fire-base.service';

@Module({
  providers: [FireBaseService],
  exports: [FireBaseService],
})
export class FireBaseModule {}
