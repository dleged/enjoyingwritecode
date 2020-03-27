import 'daruk';
import mysql from '../../src/glues/mysql/index';

declare module 'daruk' {
  interface Glue {
    mysql: ReturnType<typeof mysql>;
  }
}
