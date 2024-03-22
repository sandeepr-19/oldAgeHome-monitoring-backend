import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { BottleCount, BottleCountSchema, TimeTaken, TimeTakenSchema, Unit, UnitSchema } from './schema/analytics.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: BottleCount.name, schema: BottleCountSchema }]),
        MongooseModule.forFeature([{ name: TimeTaken.name, schema: TimeTakenSchema }]),
        MongooseModule.forFeature([{ name: Unit.name, schema: UnitSchema }]),
      ],
    providers: [AnalyticsService],
    exports: [AnalyticsService],
    controllers: [AnalyticsController],
})
export class AnalyticsModule { }
