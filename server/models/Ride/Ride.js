import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
  customerId: {
    type: String,
  },
  driverId: {
    type: String,
  },
  pickupLocation: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  dropLocation: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  fare: {
    type: Number,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const rideModel = mongoose.model("Ride", rideSchema, "Ride");

export default rideModel;
