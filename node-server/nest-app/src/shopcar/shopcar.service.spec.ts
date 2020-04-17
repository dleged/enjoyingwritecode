import { Test, TestingModule } from '@nestjs/testing';
import { ShopcarService } from './shopcar.service';

describe('ShopcarService', () => {
  let service: ShopcarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopcarService],
    }).compile();

    service = module.get<ShopcarService>(ShopcarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
