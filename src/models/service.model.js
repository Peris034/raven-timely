import mongoose, { Schema } from 'mongoose';

const serviceSchema = new Schema(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    duration: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Service = mongoose.model('Service', serviceSchema);
