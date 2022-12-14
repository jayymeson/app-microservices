import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notification-repositories';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
