import { Controller, Get } from '@nestjs/common';
import { NewsServiceService } from '../newsfeed-service/news-service.service';
import { NewsFeedInterface } from '../newsfeed-interface/newsfeed.interface';

@Controller('headlines/today')
export class NewsControllerController {
  constructor(private readonly newsFeedService: NewsServiceService) {}
  @Get()
  async getHeadlines(): Promise<NewsFeedInterface[]> {
    return await this.newsFeedService.getHeadlines();
  }
}
