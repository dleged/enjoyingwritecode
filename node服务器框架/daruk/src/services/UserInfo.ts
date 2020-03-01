/**
 * @author yimu
 * @description UserInfo service
 */

import { BaseService } from 'daruk';

export default class UserInfo extends BaseService {
  public getUserList() {
    const { mysql } = this.ctx.glue;
    return mysql.queryUserList(this.ctx.query.type);
  }
}
