import { Test, TestingModule } from '@nestjs/testing';
import { ShopcarController } from './shopcar.controller';

describe('Shopcar Controller', () => {
  let controller: ShopcarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopcarController],
    }).compile();

    controller = module.get<ShopcarController>(ShopcarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
