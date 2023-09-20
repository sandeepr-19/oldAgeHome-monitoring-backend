import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EldersController } from './elders.controller';
import { EldersService } from './elders.service';
import { Elder, ElderSchema } from './schema/elder.schema';
import { GuardModule } from '../guard/guard.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Elder.name, schema: ElderSchema }]),
    GuardModule,
  ],
  controllers: [EldersController],
  providers: [EldersService],
  exports: [EldersService],
})
export class EldersModule {}
