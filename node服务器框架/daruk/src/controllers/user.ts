/**
 * @author yimu
 * @description user route
 */

import { BaseController, Context, get, post } from 'daruk';

export default class User extends BaseController {
  // user/list
  @get('/list')
  public async index() {
    const { UserInfo } = this.service;
    const { sort } = this.ctx.util;
    const list = await UserInfo.getUserList();
    this.ctx.body = sort(list);
  }
  // user/update
  @post('/update')
  public update(ctx: Context, next: () => Promise<any>) {
    const { UserInfo } = this.service;
    const { sort } = this.ctx.util;
    return UserInfo.getUserList().then((list) => {
      this.ctx.body = sort(list);
    });
  }
}
