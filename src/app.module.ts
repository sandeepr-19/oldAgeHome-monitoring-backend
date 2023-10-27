import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EldersModule } from './elders/elders.module';
import { WebPushModule } from './web-push/web-push.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://san:Test0123@cluster0.l7d3wnj.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'dev' },
    ),
    UsersModule,
    AuthModule,
    EldersModule,
    // WebPushModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
