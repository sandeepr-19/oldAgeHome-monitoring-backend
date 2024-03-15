import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

export type BottleCountDocument = BottleCount & Document;
export type TimeTakenDocument = TimeTaken & Document;

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

export const BottleCountSchema = SchemaFactory.createForClass(BottleCount);
export const TimeTakenSchema = SchemaFactory.createForClass(TimeTaken);

