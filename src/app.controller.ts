import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { UserService } from './modules /users/user.service';
import { User } from './modules /users/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}
  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '超级管理员',
      desc: '管理员',
      tel: '982408',
      password: '123',
      account: 'admin',
    });
  }
  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('32fdb9d5-7299-4c89-b28f-a129ee32213e');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      'a176d8ba-2179-464c-b82e-0479bf4951a3',
      {
        name: '超级管理员',
        desc: '管理员',
        tel: '982408',
        password: '123456',
        account: 'admin',
      },
    );
  }
  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.findOne(
      'a176d8ba-2179-464c-b82e-0479bf4951a3',
    );
  }
}
