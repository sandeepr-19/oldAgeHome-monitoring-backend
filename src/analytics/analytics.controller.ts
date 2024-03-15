import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { BottleCountDto } from './dto/analytics.dto';
import { TimeTakenDto } from './dto/analytics.dto';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) { }

    @Get()
    async getAnalytics( @Req() request: any) {
      return this.analyticsService.getAnalyticsData();
    }

    @Post('/saveBottleCount')
    async saveBottleCount(@Body() bottleCountDto: BottleCountDto, @Req() request: any) {
        console.log(bottleCountDto);
        return this.analyticsService.saveBottleCount(bottleCountDto);
    }

    @Post('/saveTimeTaken')
    async saveTimeTaken(@Body() timeTakenDto: TimeTakenDto, @Req() request: any) {
        console.log(timeTakenDto);
        return this.analyticsService.saveTimeTaken(timeTakenDto);
    }
}
