import { Test, TestingModule } from '@nestjs/testing';
import { SsrController } from './ssr.controller';

describe('Ssr Controller', () => {
  let controller: SsrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsrController],
    }).compile();

    controller = module.get<SsrController>(SsrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
