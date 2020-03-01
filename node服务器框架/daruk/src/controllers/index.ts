/**
 * @author yimu
 * @description index route
 */

import { BaseController, get } from 'daruk';

export default class Index extends BaseController {
  @get('/')
  public async index() {
    await this.ctx.render('index');
  }
}
