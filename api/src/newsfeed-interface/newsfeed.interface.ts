import { Document, Schema } from 'mongoose';

export interface NewsFeedInterface extends Document {
  readonly _id: string;
  readonly date: string;
  readonly headlines: object[];
}

export const NewsFeedInterfaceSchema = new Schema<NewsFeedInterface>(
  {
    date: { type: String, required: true },
    _id: { type: String, required: true },
    headlines: [{ type: Object, required: true }],
  },
  { timestamps: true, collection: 'newsfeed' },
);
