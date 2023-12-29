import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsControllerController } from './newsfeed-controller/news-controller.controller';
import { NewsServiceService } from './newsfeed-service/news-service.service';
import { NewsFeedInterfaceSchema } from './newsfeed-interface/newsfeed.interface';

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
  ],
  controllers: [AppController, NewsControllerController],
  providers: [AppService, NewsServiceService],
})
export class AppModule {}
