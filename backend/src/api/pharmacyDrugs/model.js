import mongoose, { Schema } from "mongoose";

const pharmacyDrugSchema = new Schema(
  {
    itemCategory: { type: String, maxLength: 50 },
    itemClass: { type: String, maxLength: 50 },
    itemType: { type: String, maxLength: 50 },
    itemCode: { type: String, maxLength: 50 },
    description: { type: String, maxLength: 50 },
    synonym: { type: String, maxLength: 50 },
    stockItem: { type: Boolean, default: true },
    consignmentItem: { type: Boolean, default: true },
    batchApplicable: { type: Boolean, default: true },
    expiryItem: { type: Boolean, default: true },
    replaceOnExpiry: { type: Boolean, default: true },
    returnAllowed: { type: Boolean, default: true },
    refundAllowed: { type: Boolean, default: true },
    trialDrug: { type: Boolean, default: true },
    addative: { type: Boolean, default: true },
    compound: { type: Boolean, default: true },
    dispense: { type: Boolean, default: true },
    counselling: { type: Boolean, default: true },
    packOfUom: { type: String, maxLength: 50 },
    packSize: { type: String, maxLength: 50 },
    packUnitUom: { type: String, maxLength: 50 },
    baseUnitUom: { type: String, maxLength: 50 },
    dispenseUom: { type: String, maxLength: 50 },
    manufacturer: { type: String, maxLength: 50 },
    vendors: { type: String, maxLength: 50 },
    store: { type: String, maxLength: 50 },
    reorderLevel: { type: String, maxLength: 50 },
    reorderQuantity: { type: String, maxLength: 50 },
    status: { type: String, maxLength: 50 },
    effectiveFrom: { type: String, maxLength: 50 },
    effectiveTo: { type: String, maxLength: 50 },
    reason: { type: String, maxLength: 50 }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, id: true },
    toObject: { virtuals: true, id: true }
  }
);

export default mongoose.model("pharmacyDrugs", pharmacyDrugSchema);
