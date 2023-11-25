import SystemDataModel from "../abstract.mjs";
import ItemDescriptionTemplate from "./templates/item-description.mjs";
import PhysicalItemTemplate from "./templates/physical-item.mjs";

/**
 * Data definition for Loot items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 */
export default class LootData extends SystemDataModel.mixin(ItemDescriptionTemplate, PhysicalItemTemplate) {
    /** @inheritdoc */
    static defineSchema() {
      return this.mergeSchema(super.defineSchema(), {
        type: new foundry.data.fields.SchemaField({
          value: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Type"}),
          subtype: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Subtype"})
        }, {label: "GENEFUNK2090.ItemLootType"})
      });
    }

  /* -------------------------------------------- */
  /*  Getters                                     */
  /* -------------------------------------------- */

  /**
   * Properties displayed in chat.
   * @type {string[]}
   */
  get chatProperties() {
    return [
      game.i18n.localize(CONFIG.Item.typeLabels.loot),
      this.weight ? `${this.weight} ${game.i18n.localize("GENEFUNK2090.AbbreviationLbs")}` : null,
      this.priceLabel
    ];
  }
}
