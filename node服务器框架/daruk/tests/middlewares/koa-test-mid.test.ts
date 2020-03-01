import { expect } from 'chai';
import Request = require('supertest');
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const app = daruk.httpServer;

describe('test for koa-test-mid', () => {
  describe('#GET / index', () => {
    it('should get X_CUSTOM_FLAG', (done) => {
      Request(app)
        .get('/')
        .end((err, res) => {
          expect(res.get('X_CUSTOM_FLAG')).to.equal('daruk');
          done();
        });
    });
  });
});
