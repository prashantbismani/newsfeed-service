import { Controller, Get } from '@nestjs/common';
import * as moment from 'moment';
import { NewsFeedService } from '../newsfeed-service/news-service.service';
import { NewsFeedInterface } from '../newsfeed-interface/newsfeed.interface';

@Controller('headlines/today')
export class NewsControllerController {
  constructor(private readonly newsFeedService: NewsFeedService) {}
  @Get()
  async getHeadlines(): Promise<NewsFeedInterface> {
    const currentDate = moment().format('YYYY-MM-DD');
    return await this.newsFeedService.getHeadlines(currentDate);
  }
}
