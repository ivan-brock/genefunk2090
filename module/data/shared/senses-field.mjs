/**
 * Field for storing senses data.
 */
export default class SensesField extends foundry.data.fields.SchemaField {
  constructor(fields={}, options={}) {
    const numberConfig = { required: true, nullable: true, integer: true, min: 0, initial: null };
    fields = {
      darkvision: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.SenseDarkvision" }),
      blindsight: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.SenseBlindsight" }),
      tremorsense: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.SenseTremorsense" }),
      truesight: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.SenseTruesight" }),
      units: new foundry.data.fields.StringField({
        required: true, nullable: true, blank: false, initial: null, label: "GENEFUNK2090.SenseUnits"
      }),
      special: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.SenseSpecial"}),
      ...fields
    };
    Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
    super(fields, { label: "GENEFUNK2090.Senses", ...options });
  }
}
