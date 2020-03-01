/**
 * @author yimu
 * @description mysql
 */

const mysql = {
  async queryUserList(type: 'boy' | 'girl' = 'boy') {
    const userMap = {
      boy: ['user1', 'user2'],
      girl: ['user1-girl', 'user2-girl']
    }
    return userMap[type];
  }
};

export default () => mysql;
