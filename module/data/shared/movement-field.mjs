/**
 * Field for storing movement data.
 */
export default class MovementField extends foundry.data.fields.SchemaField {
  constructor(fields={}, options={}) {
    const numberConfig = { required: true, nullable: true, min: 0, step: 0.1, initial: null };
    fields = {
      burrow: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.MovementBurrow" }),
      climb: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.MovementClimb" }),
      fly: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.MovementFly" }),
      swim: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.MovementSwim" }),
      walk: new foundry.data.fields.NumberField({ ...numberConfig, label: "GENEFUNK2090.MovementWalk" }),
      units: new foundry.data.fields.StringField({
        required: true, nullable: true, blank: false, initial: null, label: "GENEFUNK2090.MovementUnits"
      }),
      hover: new foundry.data.fields.BooleanField({required: true, label: "GENEFUNK2090.MovementHover"}),
      ...fields
    };
    Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
    super(fields, { label: "GENEFUNK2090.Movement", ...options });
  }
}
