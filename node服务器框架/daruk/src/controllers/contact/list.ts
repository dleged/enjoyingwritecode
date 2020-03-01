/**
 * @author yimu
 * @description contact route
 */

import { BaseController, get } from 'daruk';

export default class ContactList extends BaseController {
  // /contact/list
  @get('/')
  public async index() {}
}
