import mongoose, { Schema } from "mongoose";

const orderCatalogSchema = new Schema(
  {
    orderCategory: { type: String, maxLength: 50 },
    orderType: { type: String, maxLength: 50 },
    orderCode: { type: String, maxLength: 50 },
    description: { type: String, maxLength: 50 },
    synonym: { type: String, maxLength: 50 },
    defaultQuantity: { type: String, maxLength: 50 },
    quantityChange: { type: Boolean, default: true },
    maxQuantity: { type: String, default: true },
    remarks: { type: String, default: true },
    consent: { type: String, default: true },
    completeOnOrder: { type: Boolean, default: true },
    holdApplicable: { type: Boolean, default: true },
    discontinueApplicable: { type: Boolean, default: true },
    chargeable: { type: Boolean, maxLength: 50 },
    resultApplicable: { type: Boolean, maxLength: 50 },
    return: { type: Boolean, maxLength: 50 },
    result: { type: Boolean, maxLength: 50 },
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

export default mongoose.model("orderCatalogs", orderCatalogSchema);
