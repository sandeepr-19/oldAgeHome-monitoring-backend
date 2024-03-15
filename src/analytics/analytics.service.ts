import { Injectable } from '@nestjs/common';
import { BottleCountDto,TimeTakenDto } from './dto/analytics.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BottleCount, BottleCountDocument, TimeTaken, TimeTakenDocument } from './schema/analytics.schema';

@Injectable()
export class AnalyticsService {
constructor(@InjectModel(BottleCount.name) private readonly model1: Model<BottleCountDocument>,
@InjectModel(TimeTaken.name) private readonly model2: Model<TimeTakenDocument>){}
    async saveTimeTaken(input: TimeTakenDto): Promise<any> {
        const newData = new this.model2({time:input.time,timeTaken:parseInt(input.timeTaken),date:this.getCurrentDate()});
        return await newData.save();
      }

      async saveBottleCount(input: BottleCountDto): Promise<any> {
        const newData = new this.model1({time:input.time,count:parseInt(input.bottleCount),date:this.getCurrentDate()});
        return await newData.save();
      }

      async getAnalyticsData() {

        const bottleCount = await this.model1.find().exec();
        const timeTaken = await this.model2.find().exec();

    const leastTimeTaken = Math.min(...timeTaken.map(item => item.timeTaken));
    const mostTimeTaken = Math.max(...timeTaken.map(item => item.timeTaken));
    const totalTime = timeTaken.reduce((acc, item) => acc + item.timeTaken, 0);
    const averageTimeTaken = totalTime / timeTaken.length;

    const leastSpeed = Math.min(...bottleCount.map(item => item.count));
    const mostSpeed = Math.max(...bottleCount.map(item => item.count));
    const totalSpeed = bottleCount.reduce((acc, item) => acc + item.count, 0);
    const averageSpeed = totalSpeed / bottleCount.length;

        return {timeTakenEntities: timeTaken.length,leastSpeed,mostSpeed,averageSpeed,leastTimeTaken,mostTimeTaken,averageTimeTaken,bottleCount};
      }

     private getCurrentDate(): string {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Adding 1 because getMonth returns zero-based month index
        const year = currentDate.getFullYear();
    
        // Padding single-digit day and month with leading zeros if necessary
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
    
        // Concatenating day, month, and year with '/' separator
        return `${formattedDay}/${formattedMonth}/${year}`;
      }
 }
