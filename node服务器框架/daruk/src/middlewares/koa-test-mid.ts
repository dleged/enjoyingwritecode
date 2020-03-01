/**
 * @author yimu
 * @description user middlewares
 */

import { Context, Daruk } from 'daruk';

export default (daruk: Daruk) => {
  return async (ctx: Context, next: Function) => {
    ctx.set('X_CUSTOM_FLAG', 'daruk');
    return next();
  };
};
