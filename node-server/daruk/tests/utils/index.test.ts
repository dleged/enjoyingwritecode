import { expect } from 'chai';
import daruk from '../../src/app';

daruk.logger.options.disable = true;
const { sort } = daruk.context.util;

describe('test for utils', () => {
  describe('test for sort', () => {
    it('should get sort data', (done) => {
      expect(sort([1, 3, 4, 5, 7, 9, 0, 2])[0]).to.equal(0);
      done();
    });
  });
});
