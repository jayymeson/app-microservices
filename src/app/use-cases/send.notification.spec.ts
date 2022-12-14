import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notifications';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notitification',
      category: 'social',
      recipientId: 'exemple',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
