import { Body, Controller, Post, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Test1Dto } from './dto/test1.dto';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) { }
    @Post('/sendAlert')
    async createElder(@Body() test1Dto: Test1Dto, @Req() request: any) {
        console.log(test1Dto);
        return true;
    }
}
