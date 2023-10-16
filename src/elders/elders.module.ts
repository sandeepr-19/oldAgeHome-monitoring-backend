import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EldersController } from './elders.controller';
import { EldersService } from './elders.service';
import { Elder, ElderSchema } from './schema/elder.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Elder.name, schema: ElderSchema }]),
    AuthModule,
  ],
  controllers: [EldersController],
  providers: [EldersService],
  exports: [EldersService],
})
export class EldersModule {}
