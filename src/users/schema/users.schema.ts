import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop({ nullable: true })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
