import { Injectable } from '@nestjs/common';
import { BottleCountDto,EnergyMeterDto,TimeTakenDto } from './dto/analytics.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BottleCount, BottleCountDocument, TimeTaken, TimeTakenDocument, Unit, UnitDocument } from './schema/analytics.schema';

@Injectable()
export class AnalyticsService {
constructor(@InjectModel(BottleCount.name) private readonly model1: Model<BottleCountDocument>,
@InjectModel(TimeTaken.name) private readonly model2: Model<TimeTakenDocument>,
@InjectModel(Unit.name) private readonly model3: Model<UnitDocument>,){}
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
        const units = await this.model3.find().exec();

    const leastTimeTaken = Math.min(...timeTaken.map(item => item.timeTaken));
    const mostTimeTaken = Math.max(...timeTaken.map(item => item.timeTaken));
    const totalTime = timeTaken.reduce((acc, item) => acc + item.timeTaken, 0);
    const averageTimeTaken = totalTime / timeTaken.length;

    const leastSpeed = Math.min(...bottleCount.map(item => item.count));
    const mostSpeed = Math.max(...bottleCount.map(item => item.count));
    const totalSpeed = bottleCount.reduce((acc, item) => acc + item.count, 0);
    const averageSpeed = totalSpeed / bottleCount.length;

    const highestUnits = Math.min(...units.map(item => item.currentUnits));
    const lowestUnits = Math.max(...units.map(item => item.currentUnits));
    const totalUnits = units.reduce((acc, item) => acc + item.currentUnits, 0);
    const averageUnits = totalUnits / units.length;

    const highestTariff = Math.min(...units.map(item => item.tariff));
    const lowestTariff = Math.max(...units.map(item => item.tariff));
    const totalTariff = units.reduce((acc, item) => acc + item.tariff, 0);
    const averageTariff = totalTariff / units.length;

        return {units,highestUnits,lowestUnits,averageUnits,highestTariff,lowestTariff,averageTariff,timeTakenEntities: timeTaken.length,leastSpeed,mostSpeed,averageSpeed,leastTimeTaken,mostTimeTaken,averageTimeTaken,bottleCount};
      }

      async saveUnitsMeasured(input: EnergyMeterDto): Promise<any> {
        try {
          const lastUnit = await this.model3.findOne({}, {}, { sort: { _id: -1 } }).exec();
          
          if (lastUnit) {
              const presentUnits = input.units - lastUnit.measuredUnits;
              const newUnitData = new this.model3({measuredUnits:input.units, time: this.getCurrentTime(), currentUnits: presentUnits, date: this.getCurrentDate(),tariff:this.calculateBill( presentUnits) });
             return await newUnitData.save();
          } else {
            const newUnitData = new this.model3({ measuredUnits:input.units,time: this.getCurrentTime(), currentUnits:  input.units, date: this.getCurrentDate(),tariff:this.calculateBill( input.units) });
            return await newUnitData.save();
          }
      } catch (error) {
          console.error("Error occurred while fetching units:", error);
      }
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

      private getCurrentTime(): string {
        const date = new Date();
        const hours = this.padZero(date.getHours());
        const minutes = this.padZero(date.getMinutes());
        return `${hours}:${minutes}`;
      }
    
      private padZero(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
      }

      private calculateBill(units: number): number {
        if (units <= 100) {
            return units * 0;
        } else if (units <= 200) {
            return (100 * 0) + (units - 100) * 2.25;
        } else if (units <= 400) {
            return (100 * 0) + (100 * 2.25) + (units - 200) * 4.5;
        } else if (units > 400) {
            return (100 * 0) + (100 * 2.25) + (200 * 4.5) + (units - 400) * 6;
        }
        return 0;
    }
 }
