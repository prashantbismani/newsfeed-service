import { Test, TestingModule } from '@nestjs/testing';
import { NewsControllerController } from './news-controller.controller';

describe('NewsControllerController', () => {
  let controller: NewsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsControllerController],
    }).compile();

    controller = module.get<NewsControllerController>(NewsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
