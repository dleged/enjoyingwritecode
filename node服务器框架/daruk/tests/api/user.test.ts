import { expect } from 'chai';
import Request = require('supertest');
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const app = daruk.httpServer;

describe('test for api user', () => {
  describe('#GET /user/list', () => {
    it('should get user list', (done) => {
      Request(app)
        .get('/user/list')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('#POST /user/update', () => {
    it('should update user', (done) => {
      Request(app)
        .post('/user/update')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.equal('user1');
          done();
        });
    });
  });
});
