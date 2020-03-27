import 'daruk';
import utils from '../../src/utils/index';

declare module 'daruk' {
  interface Util extends ReturnType<typeof utils> {}
}
