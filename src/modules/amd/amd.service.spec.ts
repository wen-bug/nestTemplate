import { Test, TestingModule } from '@nestjs/testing';
import { AmdService } from './amd.service';

describe('AmdService', () => {
  let service: AmdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmdService],
    }).compile();

    service = module.get<AmdService>(AmdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
