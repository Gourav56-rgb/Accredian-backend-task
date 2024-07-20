import mongoose from "mongoose";
import validator from "validator"

const referSchema = new mongoose.Schema(
  {
    referrerInfo: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: validator.default.isEmail
      },
      mobileNo: {
        type: Number,
        required: true,
      },
      relationshipToReferee: {
        type: String,
        required: true,
      },
      referrerID: {
        type: String,
        required: true,
      },
    },
    refereeInfo: {
      refereeName: {
        type: String,
        required: true,
      },
      refereeEmail: {
        type: String,
        required: true,
        unique: true,
      },
      refereeMobileNo: {
        type: Number,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      currentEducationLevel: {
        type: String,
        required: true,
      },
      courseOfInterest: {
        type: String,
        required: true,
      },
    },
    courseInfo: {
      courseName: {
        type: String,
        required: true,
      },
      courseID: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Refer = mongoose.model("Refer", referSchema);
