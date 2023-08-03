import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { MessageModule } from './module/message/message.module';

@Module({
  imports: [UserModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
