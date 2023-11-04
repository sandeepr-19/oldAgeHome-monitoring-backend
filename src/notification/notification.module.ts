import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { FireBaseModule } from '../fire-base/fire-base.module';
import { EldersModule } from '../elders/elders.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [FireBaseModule, EldersModule, UsersModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
