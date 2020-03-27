import { expect } from 'chai';
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const { UserInfo } = daruk.module.service
const mockRequest = {
  url: '/?type=girl'
}
const ctx = daruk.mockContext(mockRequest)

describe('test for service', () => {
  describe('test for UserInfo', () => {
    it('should get UserInfo.getUserList data', (done) => {
      const UserInfoInstance = new UserInfo(ctx)
      UserInfoInstance.getUserList().then((val:string[]) => {
        expect(val[0]).to.equal('user1-girl');
        expect(val[1]).to.equal('user2-girl');
        done();
      });
    });
  });
});
