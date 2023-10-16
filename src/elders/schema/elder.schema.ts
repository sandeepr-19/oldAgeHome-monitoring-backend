import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { User } from '../../users/schema/users.schema';

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

  @Prop()
  gender: string;

  @Prop({ required: false })
  mobileNumber: string;

  @Prop({ required: false })
  guardianName: string;

  @Prop({ required: false })
  guardianContactNumber: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  careTakerId: Types.ObjectId | User;
}

export const ElderSchema = SchemaFactory.createForClass(Elder);

ElderSchema.add({
  careTakerId: { type: Types.ObjectId, ref: User.name },
});
