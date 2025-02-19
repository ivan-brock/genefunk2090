/**
 * Shared contents of the traits schema between various actor types.
 */
export default class TraitsField {
  /**
   * Data structure for a standard actor trait.
   *
   * @typedef {object} SimpleTraitData
   * @property {Set<string>} value  Keys for currently selected traits.
   * @property {string} custom      Semicolon-separated list of custom traits.
   */

  /**
   * Data structure for a damage actor trait.
   *
   * @typedef {object} DamageTraitData
   * @property {Set<string>} value     Keys for currently selected traits.
   * @property {Set<string>} bypasses  Keys for physical weapon properties that cause resistances to be bypassed.
   * @property {string} custom         Semicolon-separated list of custom traits.
   */

  /* -------------------------------------------- */

  /**
   * Fields shared between characters, NPCs, and vehicles.
   *
   * @type {object}
   * @property {string} size         Actor's size.
   * @property {DamageTraitData} di  Damage immunities.
   * @property {DamageTraitData} dr  Damage resistances.
   * @property {DamageTraitData} dv  Damage vulnerabilities.
   * @property {SimpleTraitData} ci  Condition immunities.
   */
  static get common() {
    return {
      size: new foundry.data.fields.StringField({required: true, initial: "med", label: "GENEFUNK2090.Size"}),
      di: this.makeDamageTrait({label: "GENEFUNK2090.DamImm"}),
      dr: this.makeDamageTrait({label: "GENEFUNK2090.DamRes"}),
      dv: this.makeDamageTrait({label: "GENEFUNK2090.DamVuln"}),
      ci: this.makeSimpleTrait({label: "GENEFUNK2090.ConImm"})
    };
  }

  /* -------------------------------------------- */

  /**
   * Fields shared between characters and NPCs.
   *
   * @type {object}
   * @property {SimpleTraitData} languages  Languages known by this creature.
   */
  static get creature() {
    return {
      languages: this.makeSimpleTrait({label: "GENEFUNK2090.Languages"})
    };
  }

  /* -------------------------------------------- */

  /**
   * Produce the schema field for a simple trait.
   * @param {object} [schemaOptions={}]          Options passed to the outer schema.
   * @param {object} [options={}]
   * @param {string[]} [options.initial={}]      The initial value for the value set.
   * @param {object} [options.extraFields={}]    Additional fields added to schema.
   * @returns {SchemaField}
   */
  static makeSimpleTrait(schemaOptions={}, {initial=[], extraFields={}}={}) {
    return new foundry.data.fields.SchemaField({
      ...extraFields,
      value: new foundry.data.fields.SetField(
        new foundry.data.fields.StringField(), {label: "GENEFUNK2090.TraitsChosen", initial}
      ),
      custom: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Special"})
    }, schemaOptions);
  }

  /* -------------------------------------------- */

  /**
   * Produce the schema field for a damage trait.
   * @param {object} [schemaOptions={}]          Options passed to the outer schema.
   * @param {object} [options={}]
   * @param {string[]} [options.initial={}]      The initial value for the value set.
   * @param {object} [options.extraFields={}]    Additional fields added to schema.
   * @returns {SchemaField}
   */
  static makeDamageTrait(schemaOptions={}, {initial=[], initialBypasses=[], extraFields={}}={}) {
    return this.makeSimpleTrait(schemaOptions, {initial, extraFields: {
      ...extraFields,
      bypasses: new foundry.data.fields.SetField(new foundry.data.fields.StringField(), {
        label: "GENEFUNK2090.DamagePhysicalBypass", hint: "GENEFUNK2090.DamagePhysicalBypassHint", initial: initialBypasses
      })
    }});
  }
}
