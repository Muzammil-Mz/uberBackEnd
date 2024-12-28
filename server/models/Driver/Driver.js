import mongoose, { model } from "mongoose";

const driverschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  vehicleDetails: {
    licensePlate: {
      type: Number,
    },
    model: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  availability: {
    type: true,
  },
  rating: {
    type: Number,
  },
  count: {
    type: Number,
  },
  rideHistory: [
    {
      createdAt: {
        type: Date,
      },
      updatedAt: {
        type: Date,
      },
    },
  ],
});

const driverModel = mongoose.model("driver", driverschema, "driver");

export default driverModel;
