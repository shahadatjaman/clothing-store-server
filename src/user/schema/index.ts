import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ default: true })
  lastname: string;

  @Prop({ default: true })
  email: string;

  @Prop({ default: true })
  password: string;

  @Prop({
    type: Array,
    enum: Object.values(UserRole),
    default: [UserRole.USER],
  })
  roles: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
