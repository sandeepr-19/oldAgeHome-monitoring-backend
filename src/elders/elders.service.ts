import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateElderDto } from './dto/createElder.dto';
import { Elder, ElderDocument } from './schema/elder.schema';
import { Model } from 'mongoose';

@Injectable()
export class EldersService {
  constructor(
    @InjectModel(Elder.name) private readonly model: Model<ElderDocument>,
  ) {}

  async getElderById(id: string): Promise<any> {
    const elder = await this.model.findById(id).exec();
    return elder;
  }

  async getElderByFilter(filterInput: any): Promise<any> {
    const elder = await this.model.findOne(filterInput).exec();
    return elder;
  }

  async getEldersByFilter(filterInput: any): Promise<any> {
    const elders = await this.model.find(filterInput).exec();
    return elders;
  }

  async createElder(input: CreateElderDto): Promise<any> {
    const newElder = new this.model(input);
    return await newElder.save();
  }

  async updateElder(input: CreateElderDto, id: string): Promise<any> {
    const updatedElder = await this.model.findByIdAndUpdate(id, input);
    return updatedElder;
  }
}
