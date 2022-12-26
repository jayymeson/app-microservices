import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notifications';
import { DataBaseModule } from '../database/database.module';
import { NotificationControllers } from './controllers/notification.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationControllers],
  providers: [SendNotification],
})
export class HttPModule {}
