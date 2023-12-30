import { Document, Schema, Types } from 'mongoose';

export interface Headline {
  headline: string;
  href: string;
}

export interface NewsFeedInterface extends Document {
  readonly _id: Types.ObjectId;
  readonly date: string;
  readonly headlines: Headline[];
}

export const NewsFeedInterfaceSchema = new Schema<NewsFeedInterface>(
  {
    date: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true },
    headlines: [{ type: Object, required: true }],
  },
  { timestamps: true, collection: 'newsfeed' },
);
