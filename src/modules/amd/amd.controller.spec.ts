import { Test, TestingModule } from '@nestjs/testing';
import { AmdController } from './amd.controller';
import { AmdService } from './amd.service';

describe('AmdController', () => {
  let controller: AmdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmdController],
      providers: [AmdService],
    }).compile();

    controller = module.get<AmdController>(AmdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
