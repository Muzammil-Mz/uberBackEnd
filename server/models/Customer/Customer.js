import mongoose from "mongoose";
const customerschema = new mongoose.Schema({
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
//   location: {
//     latitude: {
//       type: String,
//     },
//     longitude: {
//       type: String,
//     },
//   },
//   paymentMethods: [
//     {
//       cardtype: {
//         type: String,
//       },
//       carNumber: {
//         type: String,
//       },
//       expiryDate: {
//         type: String,
//       },
//     },
//   ],
//   rideHistory: [
//     {
//       Date: {
//         type: Number,
//       },
//       time: {
//         type: String,
//       },
//       pickupLocation: {
//         type: String,
//       },
//       dropLocation: {
//         type: String,
//       },
//       fare: {
//         type: Number,
//       },
//       vehicleNumber: {
//         type: String,
//       },
//     },
//   ],
});

const customerModel = mongoose.model("Customer", customerschema, "Customer");
export default customerModel;
