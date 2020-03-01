import { expect } from 'chai';
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const mysql = daruk.context.glue.mysql;

describe('test for glues', () => {
  describe('test for mysql', () => {
    it('should get queryUserList data', (done) => {
      mysql.queryUserList().then((val:string[]) => {
        expect(val[0]).to.equal('user1');
        expect(val[1]).to.equal('user2');
        done();
      });
    });
  });
});
