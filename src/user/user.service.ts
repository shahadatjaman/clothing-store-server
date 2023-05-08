import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User, UserDocument } from 'src/user/schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async findOne(email: string) {
    return this.userModel.findOne({ email });
  }

  async createUser(values: CreateUserDto) {
    const newUser = new this.userModel(values);
    return newUser.save();
  }
}
