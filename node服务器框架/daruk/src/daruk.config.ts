/**
 * Daruk 配置
 */
import { Daruk } from 'daruk';
import path = require('path');

export default function(daruk: Daruk) {
  const { rootPath } = daruk.options;

  const darukConfig: any = {};

  darukConfig.middlewareOrder = [
    'koa-handle-error',
    'koa-favicon',
    'koa-static',
    'koa-bodyparser',
    'koa-test-mid',
    'koa-ejs'
  ];
  darukConfig.middleware = {
    // https://github.com/axross/koa-handle-error 必须第一个位置
    'koa-handle-error': (mid: Function) => {
      return mid((err: any) => {
        console.log(err);
      });
    },
    'koa-favicon': (mid: Function) => {
      return mid(`${rootPath}/public/Daruk.png`);
    },
    // https://github.com/koajs/bodyparser
    'koa-bodyparser': (mid: Function) => {
      return mid();
    },
    // https://github.com/PaulRosset/formidable-upload-koa
    'formidable-upload-koa': (mid: Function) => {
      return mid({ uploadDir: `${rootPath}`, keepExtensions: true });
    },
    // https://github.com/venables/koa-json-body
    'koa-json-body': (mid: Function) => {
      return mid();
    },
    // https://github.com/koajs/json
    'koa-json': (mid: Function) => {
      return mid();
    },
    // https://github.com/zadzbw/koa2-cors
    'koa2-cors': (mid: Function) => {
      return mid({
        allowMethods: ['GET', 'POST', 'DELETE']
      });
    },
    // https://github.com/vagusX/koa-proxies
    'koa-proxies': (mid: Function) => {
      // 代理需要自己配置，默认不配置代码
      return false;
    },
    // https://github.com/nswbmw/koa-ip
    'koa-ip': (mid: Function) => {
      return false; //默认没有配置
      // return mid({
      //	blacklist: [],
      //	handler: async (ctx: any) => {
      //		ctx.status = 403;
      //	}
      // });
    },
    // https://github.com/koajs/static
    'koa-static': (mid: Function) => {
      return mid(path.join(rootPath, './public'));
    },
    // https://github.com/kilianc/koa-jsonp post支持iframe,默认参数callback
    'koa-jsonp': (mid: Function) => {
      return mid();
    },
    // https://github.com/koajs/compress
    'koa-compress': (mid: Function) => {
      return mid({
        threshold: 1024,
        flush: require('zlib').Z_SYNC_FLUSH
      });
    },
    // https://github.com/koajs/session
    'koa-session': (mid: Function) => {
      return mid(
        {
          key: 'koa:session'
        },
        daruk
      );
    },
    // https://github.com/ifraixedes/node-koa-flash-simple
    'koa-flash-simple': (mid: Function) => {
      return mid();
    },
    // https://github.com/koajs/ejs
    'koa-ejs': (mid: Function) => {
      mid(daruk, {
        root: path.join(rootPath, './view'),
        viewExt: 'html',
        cache: true,
        debug: false
      });
      return false;
    },
    // https://github.com/rferro/koa-body-clean
    'koa-body-clean': (mid: Function) => {
      return mid({
        threshold: 1024,
        flush: require('zlib').Z_SYNC_FLUSH
      });
    }
  };
  darukConfig.util = {
    testUtil: () => {}
  };
  darukConfig.timer = {
    testTimer: {
      cronTime: '* * * * * *', // 一秒一次
      onTick: function onTick(this: any) {
        this.stop(); // 主动停止定时器
      },
      onComplete: function onComplete() {} // 定时器完成时的回调
    }
  };

  return darukConfig;
}
