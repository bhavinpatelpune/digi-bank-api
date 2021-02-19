import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDetailsDTO } from '../accounts/account_details.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async findAll(): Promise<AccountDetailsDTO[]> {
    return this.accountService.findAll();
  }

  @Post()
  async create(@Body() account: AccountDetailsDTO) {
    this.accountService.create(account);
  }

  @Put()
  async update() {
    return 'Not yet implemented';
  }

  @Delete()
  async delete() {
    return 'Not yet implemented';
  }
}
