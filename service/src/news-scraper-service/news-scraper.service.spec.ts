import { Test, TestingModule } from '@nestjs/testing';
import { NewsScraperService } from './news-scraper.service';

describe('NewsScraperService', () => {
  let service: NewsScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsScraperService],
    }).compile();

    service = module.get<NewsScraperService>(NewsScraperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
