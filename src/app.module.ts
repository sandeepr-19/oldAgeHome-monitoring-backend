import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EldersService } from './elders/elders.service';
import { EldersModule } from './elders/elders.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://san:Test0123@cluster0.l7d3wnj.mongodb.net/dev?retryWrites=true&w=majority',
      // { dbName: 'dev' },
    ),
    UsersModule,
    AuthModule,
    EldersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
