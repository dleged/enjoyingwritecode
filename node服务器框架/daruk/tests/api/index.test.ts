import { expect } from 'chai';
import Request = require('supertest');
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const app = daruk.httpServer;

describe('test for api index', () => {
  describe('#GET /', () => {
    it('should get index html back', (done) => {
      Request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('text/html');
          expect(res.text).to.be.have.string('<img src="/daruk.png" alt="daruk">');
          done();
        });
    });
  });
});
