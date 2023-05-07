import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ default: true })
  lastname: boolean;

  @Prop({ default: true })
  email: boolean;

  @Prop({ default: true })
  password: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
