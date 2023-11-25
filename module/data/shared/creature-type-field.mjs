/**
 * Field for storing creature type data.
 */
export default class CreatureTypeField extends foundry.data.fields.SchemaField {
  constructor(fields={}, options={}) {
    fields = {
      value: new foundry.data.fields.StringField({blank: true, label: "GENEFUNK2090.CreatureType"}),
      subtype: new foundry.data.fields.StringField({label: "GENEFUNK2090.CreatureTypeSelectorSubtype"}),
      swarm: new foundry.data.fields.StringField({blank: true, label: "GENEFUNK2090.CreatureSwarmSize"}),
      custom: new foundry.data.fields.StringField({label: "GENEFUNK2090.CreatureTypeSelectorCustom"}),
      ...fields
    };
    Object.entries(fields).forEach(([k, v]) => !v ? delete fields[k] : null);
    super(fields, { label: "GENEFUNK2090.CreatureType", ...options });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  initialize(value, model, options={}) {
    const obj = super.initialize(value, model, options);

    Object.defineProperty(obj, "label", {
      get() {
        return genefunk2090.documents.Actor5e.formatCreatureType(this);
      },
      enumerable: false
    });

    return obj;
  }
}
