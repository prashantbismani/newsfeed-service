import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as moment from 'moment';
import { NewsFeedInterface } from '../newsfeed-interface/newsfeed.interface';

@Injectable()
export class NewsFeedService {
  constructor(
    @InjectModel('NewsFeedInterface')
    private readonly newsFeedModel: Model<NewsFeedInterface>,
  ) {}

  async getHeadlines(date: string): Promise<NewsFeedInterface> {
    console.log('fetching headlines for date: ', date);
    return this.newsFeedModel.findOne({ date }).exec();
  }

  async saveHeadlines(headlines: NewsFeedInterface[]): Promise<void> {
    const currentDate = moment().format('YYYY-MM-DD');
    const documentToCreate = {
      _id: new Types.ObjectId(),
      date: currentDate,
      headlines,
    };
    await this.newsFeedModel.create(documentToCreate);
  }
}
