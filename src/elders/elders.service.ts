import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateElderDto } from './dto/createElder.dto';
import { Elder, ElderDocument } from './schema/Elders.schema';
import { Model } from 'mongoose';

@Injectable()
export class EldersService {
  constructor(
    @InjectModel(Elder.name) private readonly model: Model<ElderDocument>,
  ) {}

  async createUser(userInput: CreateElderDto): Promise<any> {
    const newUser = new this.model(userInput);
    return await newUser.save();
  }

  async getUserByFilter(filterInput: any): Promise<any> {
    const user = await this.model.findOne(filterInput).exec();
    return user;
  }
}
