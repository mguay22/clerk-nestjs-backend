import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkAuthGuard } from './clerk-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ClerkAuthGuard)
  async getUsers() {
    return this.appService.getUsers();
  }
}
