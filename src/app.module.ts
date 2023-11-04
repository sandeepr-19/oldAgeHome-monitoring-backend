import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EldersModule } from './elders/elders.module';
import { EdgeNodeModule } from './edge-node/edge-node.module';
import { NotificationModule } from './notification/notification.module';
import { FireBaseModule } from './fire-base/fire-base.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://san:Test0123@cluster0.l7d3wnj.mongodb.net/dev?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    EldersModule,
    EdgeNodeModule,
    NotificationModule,
    FireBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
