import { Injectable } from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';

const serviceAccount = require('../../firebase-admin-credentials.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});
@Injectable()
export class FireBaseService {
  constructor() {}

  message(token: string, elderName: string) {
    return {
      data: {
        title: 'Alert',
        body: `emergency with ` + elderName,
      },
      token: token,
    };
  }
  async sendMessage(token: string, elderName: string, elderId: string) {
    const result = await firebaseAdmin
      .messaging()
      .send(this.message(token, elderName));
    console.log(result);
    return true;
  }

  // acceptPushNotification = async (
  //   user: any,
  //   notification_dto: NotificationDto,
  // ): Promise<NotificationToken> => {};

  // disablePushNotification = async (
  //   user: any,
  //   update_dto: UpdateNotificationDto,
  // ): Promise<void> => {};

  // getNotifications = async (): Promise<any> => {};

  // sendPush = async (
  //   user: any,
  //   title: string,
  //   body: string,
  // ): Promise<void> => {};
}
