import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsFeedInterface } from '../newsfeed-interface/newsfeed.interface';

@Injectable()
export class NewsServiceService {
  constructor(
    @InjectModel('NewsFeedInterface')
    private readonly newsFeedModel: Model<NewsFeedInterface>,
  ) {}

  async getHeadlines(): Promise<NewsFeedInterface[]> {
    return this.newsFeedModel.find().exec();
  }
}
