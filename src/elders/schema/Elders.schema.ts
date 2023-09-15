import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document, ObjectId, Types } from 'mongoose';

export type ElderDocument = Elder & Document;

@Schema()
export class Elder {
  _id: ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop({ required: false })
  mobileNumber: string;

  @Prop()
  gender: string;

  @Prop({ required: false })
  gaurdianName: string;

  @Prop({ required: false })
  guardianContactNumber: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  careTakerId?: Types.ObjectId;
}

export const ElderSchema = SchemaFactory.createForClass(Elder);
