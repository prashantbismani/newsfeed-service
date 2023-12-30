import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class NewsScraperService {
  async scrapeHeadlines() {
    try {
      const url: string = 'https://news.ycombinator.com/';
      console.log('getting data from ', url);
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const headlines = [];

      $('.titleline').each((index, element) => {
        const headline = $(element).find('a').text();
        const href = $(element).find('a').attr('href');

        headlines.push({ headline, href });
      });

      console.log('headlines: ', headlines);

      return headlines;
    } catch (error) {
      console.error('Error scraping headlines:', error);
      throw error;
    }
  }
}
