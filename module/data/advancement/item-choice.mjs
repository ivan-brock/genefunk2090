import { MappingField } from "../fields.mjs";
import SpellConfigurationData from "./spell-config.mjs";

export default class ItemChoiceConfigurationData extends foundry.abstract.DataModel {
  static defineSchema() {
    return {
      hint: new foundry.data.fields.StringField({label: "GENEFUNK2090.AdvancementHint"}),
      choices: new MappingField(new foundry.data.fields.NumberField(), {
        hint: "GENEFUNK2090.AdvancementItemChoiceLevelsHint"
      }),
      allowDrops: new foundry.data.fields.BooleanField({
        initial: true, label: "GENEFUNK2090.AdvancementConfigureAllowDrops",
        hint: "GENEFUNK2090.AdvancementConfigureAllowDropsHint"
      }),
      type: new foundry.data.fields.StringField({
        blank: false, nullable: true, initial: null,
        label: "GENEFUNK2090.AdvancementItemChoiceType", hint: "GENEFUNK2090.AdvancementItemChoiceTypeHint"
      }),
      pool: new foundry.data.fields.ArrayField(new foundry.data.fields.StringField(), {label: "DOCUMENT.Items"}),
      spell: new foundry.data.fields.EmbeddedDataField(SpellConfigurationData, {nullable: true, initial: null}),
      restriction: new foundry.data.fields.SchemaField({
        type: new foundry.data.fields.StringField({label: "GENEFUNK2090.Type"}),
        subtype: new foundry.data.fields.StringField({label: "GENEFUNK2090.Subtype"}),
        level: new foundry.data.fields.StringField({label: "GENEFUNK2090.SpellLevel"})
      })
    };
  }
}
