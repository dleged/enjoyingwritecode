import 'daruk';
import DefalutConfig from '../../src/config/config.default';
import DevConfig from '../../src/config/config.dev';
import TestConfig from '../../src/config/config.test';
import ProdConfig from '../../src/config/config.prod';

type MyConfig = typeof DefalutConfig & typeof DevConfig & typeof TestConfig & typeof ProdConfig;

declare module 'daruk' {
  interface Config extends MyConfig {}
}
