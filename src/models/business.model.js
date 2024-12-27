import mongoose, { Schema } from 'mongoose';

const businessSchema = new Schema(
  {
    businessname: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    website: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    logo: {
      type: String, // URL to the logo image
    },
    twitterAccount: {
      type: String,
    },
    instagramAccount: {
      type: String,
    },
    facebookPage: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

export const Business = mongoose.model('Business', businessSchema);
