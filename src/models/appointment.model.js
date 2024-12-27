import mongoose, { Schema } from 'mongoose';

const appointmentSchema = new Schema(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: true
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true
    },
    staffId: {
      type: Schema.Types.ObjectId,
      ref: 'Staff',
      required: true
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema);
