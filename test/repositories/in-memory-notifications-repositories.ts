import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notification-repositories';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
