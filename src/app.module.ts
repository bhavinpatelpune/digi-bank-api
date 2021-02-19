import { UserModule } from './users/user.module';
import { FundTransferModule } from './fund-transfers/fund-transfer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './accounts/account.module';

@Module({
  imports: [UserModule, FundTransferModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
