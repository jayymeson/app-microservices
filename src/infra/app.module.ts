import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { HttPModule } from './http/http.module';

@Module({
  imports: [HttPModule, DataBaseModule],
})
export class AppModule {}
