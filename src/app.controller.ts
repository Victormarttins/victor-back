import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { promises } from 'dns';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
 async postUser(@Body()user:User):Promise<User[]>{
    return this.appService.createUser(user);
  }
  @Get('users')
  async getUsers():Promise<User[]>{
    return this.appService.getUsers();
  }
}
