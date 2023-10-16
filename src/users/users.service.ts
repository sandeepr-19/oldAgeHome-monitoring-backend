import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { generateUsername } from 'unique-username-generator';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async createUser(userInput: CreateUserDto): Promise<any> {
    const newUser = new this.model({
      ...userInput,
      userName: generateUsername('', 0, 15),
    });
    return await newUser.save();
  }

  async getUserByFilter(filterInput: any): Promise<any> {
    const user = await this.model.findOne(filterInput).exec();
    return user;
  }
}
