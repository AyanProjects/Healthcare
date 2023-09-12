import mongoose, { Schema } from "mongoose";

const accompanySchema = new Schema(
  {
    idType: {
      type: String,
      maxLength: 50
    },
    toPatient: {
      type: String,
      maxLength: 50
    },
    idNumber: {
      type: String,
      maxLength: 50
    },
    expiryDate: {
      type: String,
      maxLength: 50
    },
    idSource: {
      type: String,
      maxLength: 50
    },
    prefix: {
      type: String,
      maxLength: 50
    },
    firstName: {
      type: String,
      maxLength: 50
    },
    middleName: {
      type: String,
      maxLength: 50
    },
    lastName: {
      type: String,
      maxLength: 50
    },
    suffix: {
      type: String,
      maxLength: 50
    },
    gender: {
      type: String,
      maxLength: 50
    },
    dob: {
      type: String,
      maxLength: 50
    },
    age: {
      type: Number,
      maxLength: 50
    },
    nationality: {
      type: String,
      maxLength: 50
    },
    maritalStatus: {
      type: String,
      maxLength: 50
    },
    contactPoint: [
      {
        mode: {
          type: String,
          maxLength: 50
        },
        value: {
          type: String,
          maxLength: 50
        },
        ext: {
          type: String,
          maxLength: 50
        },
        contactUse: {
          type: String,
          maxLength: 50
        },
        priority: {
          type: String,
          maxLength: 50
        }
      }
    ],
    address: [
      {
        addressUse: {
          type: String,
          maxLength: 50
        },
        addressType: {
          type: String,
          maxLength: 50
        },
        country: {
          type: String,
          maxLength: 50
        },
        pincode: {
          type: Number,
          maxLength: 50
        },
        state: {
          type: String,
          maxLength: 50
        },
        village: {
          type: String,
          maxLength: 50
        },
        line1: {
          type: String,
          maxLength: 50
        },
        line2: {
          type: String,
          maxLength: 50
        }
      }
    ]
  },

  {
    timestamps: true,
    toJSON: { virtuals: true, id: true },
    toObject: { virtuals: true, id: true }
  }
);

export default mongoose.model("accompanies", accompanySchema);
