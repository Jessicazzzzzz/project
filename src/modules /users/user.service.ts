import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  // 新增
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);

    if (res && res.affected > 0) {
      return true;
    }
    return false;
  }

  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);
    console.log('res', res);
    if (res && res.affected > 0) {
      return true;
    }
    return false;
  }

  async findOne(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({ where: { id } });
    return res;
  }
}
