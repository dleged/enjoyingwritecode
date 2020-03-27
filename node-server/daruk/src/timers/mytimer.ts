/**
 * @author yimu
 * @description user timer
 */

import { Daruk } from 'daruk';

export default (daruk: Daruk) => {
  return {
    cronTime: '* * * * * *', // 一秒一次
    onTick: function onTick(this: any) {
      daruk.logger.info('mytimer onTick');
      this.stop(); // 停止时会进入complete
    },
    onComplete: function onComplete() {
      daruk.logger.info('mytimer onComplete');
    }
  };
};
