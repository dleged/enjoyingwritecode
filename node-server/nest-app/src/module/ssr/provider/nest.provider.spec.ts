import { Test, TestingModule } from '@nestjs/testing';
import { NestProvider } from './nest.provider';

describe('NestProvider', () => {
  let provider: NestProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestProvider],
    }).compile();

    provider = module.get<NestProvider>(NestProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
