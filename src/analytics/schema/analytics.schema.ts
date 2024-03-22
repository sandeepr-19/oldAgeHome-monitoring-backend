import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

export type BottleCountDocument = BottleCount & Document;
export type TimeTakenDocument = TimeTaken & Document;
export type UnitDocument = Unit & Document;

@Schema()
export class BottleCount {
  _id: ObjectId;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  count: number;

  }

  @Schema()
export class TimeTaken {
  _id: ObjectId;

  @Prop()
  timeTaken: number;

  @Prop()
  time: string;

  @Prop()
  date: string;

  }

  @Schema()
  export class Unit {
    _id: ObjectId;
  
    @Prop()
    time: string;
  
    @Prop()
    currentUnits: number;

    @Prop()
    measuredUnits: number;
  
    @Prop()
    date: string;

    @Prop()
    tariff: number;
    }

export const BottleCountSchema = SchemaFactory.createForClass(BottleCount);
export const TimeTakenSchema = SchemaFactory.createForClass(TimeTaken);
export const UnitSchema = SchemaFactory.createForClass(Unit);

