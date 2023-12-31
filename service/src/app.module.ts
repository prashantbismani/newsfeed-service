import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsControllerController } from './newsfeed-controller/news-controller.controller';
import { NewsFeedInterfaceSchema } from './newsfeed-interface/newsfeed.interface';
import { ScheduledTaskService } from './scheduled-task-service/scheduled-task.service';
import { NewsScraperService } from './news-scraper-service/news-scraper.service';
import { NewsFeedService } from './newsfeed-service/news-service.service';
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: 'test',
    }),
    MongooseModule.forFeature([
      { name: 'NewsFeedInterface', schema: NewsFeedInterfaceSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, NewsControllerController],
  providers: [
    AppService,
    ScheduledTaskService,
    NewsScraperService,
    NewsFeedService,
  ],
})
export class AppModule {}
