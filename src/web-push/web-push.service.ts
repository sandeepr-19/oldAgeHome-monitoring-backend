import { Injectable } from '@nestjs/common';
import * as webpush from 'web-push';

@Injectable()
export class WebPushService {
  constructor() {
    webpush.setVapidDetails(
      'sandeep.rqs@gmail.com', // Your email
      'BCo4vEnVJ9bhpdzrYYVhBI2kYPnrlE-Nqmjxu3D_DHPSxUy8rBYZUvrgqgnkSnSqNvgU2NNq_EAkckHtrb5nlGw', // Public VAPID key
      'mHpA3qgZT1hzNoBB-5fyPxbyBVAekwMk6CAbdY_hFmg', // Private VAPID key
    );
  }

  async sendNotification(subscription: any, payload: any) {
    try {
      await webpush.sendNotification(subscription, JSON.stringify(payload));
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  }
}
