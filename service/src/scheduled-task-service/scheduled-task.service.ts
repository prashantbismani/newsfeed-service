import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsScraperService } from '../news-scraper-service/news-scraper.service';
import { NewsFeedService } from '../newsfeed-service/news-service.service';

@Injectable()
export class ScheduledTaskService {
  constructor(
    private readonly newsScraperService: NewsScraperService,
    private readonly newsFeedService: NewsFeedService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) // Executes every day at midnight //to test use : EVERY_MINUTE
  async handleCron() {
    console.log('Scraping headlines...');

    const scrapedHeadlines = await this.newsScraperService.scrapeHeadlines();

    console.log('Scraping task completed, Saving to the database...');
    await this.newsFeedService.saveHeadlines(scrapedHeadlines);

    console.log('Data successfully saved to the database.');
  }
}
