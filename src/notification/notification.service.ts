import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { EldersService } from '../elders/elders.service';
import { UsersService } from '../users/users.service';
import { FireBaseService } from '../fire-base/fire-base.service';

@Injectable()
export class NotificationService {
  constructor(
    private readonly eldersService: EldersService,
    private readonly usersService: UsersService,
    private readonly fireBaseService: FireBaseService,
  ) {}
  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }

  async sendAlert(id: string) {
    const elder = await this.eldersService.getElderById(id);
    const user = await this.usersService.getUserById(elder.careTakerId);
    return this.fireBaseService.sendMessage(
      user.fcmToken,
      elder.firstName,
      elder._id,
    );
  }
}
