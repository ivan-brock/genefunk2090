import SystemDataModel from "../abstract.mjs";
import { MappingField } from "../fields.mjs";

/**
 * A template for currently held currencies.
 *
 * @property {object} currency  Object containing currencies as numbers.
 * @mixin
 */
export default class CurrencyTemplate extends SystemDataModel {
  /** @inheritdoc */
  static defineSchema() {
    return {
      currency: new MappingField(new foundry.data.fields.NumberField({
        required: true, nullable: false, integer: true, min: 0, initial: 0
      }), {initialKeys: CONFIG.GENEFUNK2090.currencies, initialKeysOnly: true, label: "GENEFUNK2090.Currency"})
    };
  }
}
