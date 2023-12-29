import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user-input.type';
import { UserType } from './dto/user.type';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => Boolean, { description: '创建用户' })
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params);
  }
  @Query(() => UserType, { description: '使用ID查询用户' })
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.findOne(id);
  }
  @Mutation(() => Boolean, { description: '跟新用户' })
  async update(
    @Args('id') id: string,
    @Args('params') params: UserInput,
  ): Promise<boolean> {
    return await this.userService.update(id, params);
  }

  @Mutation(() => Boolean, { description: '删除用户' })
  async del(@Args('id') id: string): Promise<boolean> {
    return await this.userService.del(id);
  }
}
