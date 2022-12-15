import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notitification',
      category: 'social',
      recipientId: 'exemple',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
