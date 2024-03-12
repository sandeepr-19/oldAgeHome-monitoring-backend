import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';

@Module({
    providers: [AnalyticsService],
    exports: [AnalyticsService],
    controllers: [AnalyticsController],
})
export class AnalyticsModule { }
