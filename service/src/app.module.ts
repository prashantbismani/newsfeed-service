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

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://prashantbismani:TtnBDBBsWzHJDJN4@personalprojects.g9qxpqo.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'test',
      },
    ),
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
