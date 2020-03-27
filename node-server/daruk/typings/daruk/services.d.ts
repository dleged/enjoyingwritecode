import 'daruk';
import UserInfo from '../../src/services/UserInfo';

declare module 'daruk' {
  interface Service {
    UserInfo: UserInfo;
  }
}
