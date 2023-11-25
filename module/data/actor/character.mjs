import { FormulaField, LocalDocumentField } from "../fields.mjs";
import CreatureTypeField from "../shared/creature-type-field.mjs";
import AttributesFields from "./templates/attributes.mjs";
import CreatureTemplate from "./templates/creature.mjs";
import DetailsFields from "./templates/details.mjs";
import TraitsFields from "./templates/traits.mjs";

/**
 * System data definition for Characters.
 *
 * @property {object} attributes
 * @property {object} attributes.ac
 * @property {number} attributes.ac.flat                  Flat value used for flat or natural armor calculation.
 * @property {string} attributes.ac.calc                  Name of one of the built-in formulas to use.
 * @property {string} attributes.ac.formula               Custom formula to use.
 * @property {object} attributes.hp
 * @property {number} attributes.hp.value                 Current hit points.
 * @property {number} attributes.hp.max                   Override for maximum HP.
 * @property {number} attributes.hp.temp                  Temporary HP applied on top of value.
 * @property {number} attributes.hp.tempmax               Temporary change to the maximum HP.
 * @property {object} attributes.hp.bonuses
 * @property {string} attributes.hp.bonuses.level         Bonus formula applied for each class level.
 * @property {string} attributes.hp.bonuses.overall       Bonus formula applied to total HP.
 * @property {object} attributes.death
 * @property {number} attributes.death.success            Number of successful death saves.
 * @property {number} attributes.death.failure            Number of failed death saves.
 * @property {number} attributes.exhaustion               Number of levels of exhaustion.
 * @property {number} attributes.inspiration              Does this character have inspiration?
 * @property {object} details
 * @property {Item5e|string} details.background           Character's background item or name.
 * @property {string} details.originalClass               ID of first class taken by character.
 * @property {XPData} details.xp                          Experience points gained.
 * @property {number} details.xp.value                    Total experience points earned.
 * @property {string} details.appearance                  Description of character's appearance.
 * @property {string} details.trait                       Character's personality traits.
 * @property {string} details.ideal                       Character's ideals.
 * @property {string} details.bond                        Character's bonds.
 * @property {string} details.flaw                        Character's flaws.
 * @property {object} traits
 * @property {SimpleTraitData} traits.weaponProf          Character's weapon proficiencies.
 * @property {SimpleTraitData} traits.armorProf           Character's armor proficiencies.
 * @property {object} resources
 * @property {CharacterResourceData} resources.primary    Resource number one.
 * @property {CharacterResourceData} resources.secondary  Resource number two.
 * @property {CharacterResourceData} resources.tertiary   Resource number three.
 */
export default class CharacterData extends CreatureTemplate {

  /** @inheritdoc */
  static _systemType = "character";

  /* -------------------------------------------- */

  /** @inheritdoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      attributes: new foundry.data.fields.SchemaField({
        ...AttributesFields.common,
        ...AttributesFields.creature,
        ac: new foundry.data.fields.SchemaField({
          flat: new foundry.data.fields.NumberField({integer: true, min: 0, label: "GENEFUNK2090.ArmorClassFlat"}),
          calc: new foundry.data.fields.StringField({initial: "default", label: "GENEFUNK2090.ArmorClassCalculation"}),
          formula: new FormulaField({deterministic: true, label: "GENEFUNK2090.ArmorClassFormula"})
        }, {label: "GENEFUNK2090.ArmorClass"}),
        hp: new foundry.data.fields.SchemaField({
          value: new foundry.data.fields.NumberField({
            nullable: false, integer: true, min: 0, initial: 0, label: "GENEFUNK2090.HitPointsCurrent"
          }),
          max: new foundry.data.fields.NumberField({
            nullable: true, integer: true, min: 0, initial: null, label: "GENEFUNK2090.HitPointsOverride"
          }),
          temp: new foundry.data.fields.NumberField({integer: true, initial: 0, min: 0, label: "GENEFUNK2090.HitPointsTemp"}),
          tempmax: new foundry.data.fields.NumberField({integer: true, initial: 0, label: "GENEFUNK2090.HitPointsTempMax"}),
          bonuses: new foundry.data.fields.SchemaField({
            level: new FormulaField({deterministic: true, label: "GENEFUNK2090.HitPointsBonusLevel"}),
            overall: new FormulaField({deterministic: true, label: "GENEFUNK2090.HitPointsBonusOverall"})
          })
        }, {label: "GENEFUNK2090.HitPoints"}),
        death: new foundry.data.fields.SchemaField({
          success: new foundry.data.fields.NumberField({
            required: true, nullable: false, integer: true, min: 0, initial: 0, label: "GENEFUNK2090.DeathSaveSuccesses"
          }),
          failure: new foundry.data.fields.NumberField({
            required: true, nullable: false, integer: true, min: 0, initial: 0, label: "GENEFUNK2090.DeathSaveFailures"
          })
        }, {label: "GENEFUNK2090.DeathSave"}),
        exhaustion: new foundry.data.fields.NumberField({
          required: true, nullable: false, integer: true, min: 0, initial: 0, label: "GENEFUNK2090.Exhaustion"
        }),
        inspiration: new foundry.data.fields.BooleanField({required: true, label: "GENEFUNK2090.Inspiration"})
      }, {label: "GENEFUNK2090.Attributes"}),
      details: new foundry.data.fields.SchemaField({
        ...DetailsFields.common,
        ...DetailsFields.creature,
        background: new LocalDocumentField(foundry.documents.BaseItem, {
          required: true, fallback: true, label: "GENEFUNK2090.Background"
        }),
        originalClass: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.ClassOriginal"}),
        xp: new foundry.data.fields.SchemaField({
          value: new foundry.data.fields.NumberField({
            required: true, nullable: false, integer: true, min: 0, initial: 0, label: "GENEFUNK2090.ExperiencePointsCurrent"
          })
        }, {label: "GENEFUNK2090.ExperiencePoints"}),
        appearance: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Appearance"}),
        trait: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.PersonalityTraits"}),
        ideal: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Ideals"}),
        bond: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Bonds"}),
        flaw: new foundry.data.fields.StringField({required: true, label: "GENEFUNK2090.Flaws"})
      }, {label: "GENEFUNK2090.Details"}),
      traits: new foundry.data.fields.SchemaField({
        ...TraitsFields.common,
        ...TraitsFields.creature,
        weaponProf: TraitsFields.makeSimpleTrait({label: "GENEFUNK2090.TraitWeaponProf"}),
        armorProf: TraitsFields.makeSimpleTrait({label: "GENEFUNK2090.TraitArmorProf"})
      }, {label: "GENEFUNK2090.Traits"}),
      resources: new foundry.data.fields.SchemaField({
        primary: makeResourceField({label: "GENEFUNK2090.ResourcePrimary"}),
        secondary: makeResourceField({label: "GENEFUNK2090.ResourceSecondary"}),
        tertiary: makeResourceField({label: "GENEFUNK2090.ResourceTertiary"})
      }, {label: "GENEFUNK2090.Resources"})
    });
  }

  /* -------------------------------------------- */
  /*  Data Migration                              */
  /* -------------------------------------------- */

  /** @inheritdoc */
  static _migrateData(source) {
    super._migrateData(source);
    AttributesFields._migrateInitiative(source.attributes);
  }

  /* -------------------------------------------- */
  /*  Data Preparation                            */
  /* -------------------------------------------- */

  /**
   * Prepare movement & senses values derived from race item.
   */
  prepareEmbeddedData() {
    const raceData = this.details.race?.system;
    if ( !raceData ) {
      this.details.type = new CreatureTypeField({ swarm: false }).initialize({ value: "humanoid" }, this);
      return;
    }

    for ( const key of Object.keys(CONFIG.GENEFUNK2090.movementTypes) ) {
      if ( raceData.movement[key] ) this.attributes.movement[key] ??= raceData.movement[key];
    }
    if ( raceData.movement.hover ) this.attributes.movement.hover = true;
    this.attributes.movement.units ??= raceData.movement.units;

    for ( const key of Object.keys(CONFIG.GENEFUNK2090.senses) ) {
      if ( raceData.senses[key] ) this.attributes.senses[key] ??= raceData.senses[key];
    }
    this.attributes.senses.special = [this.attributes.senses.special, raceData.senses.special].filterJoin(";");
    this.attributes.senses.units ??= raceData.senses.units;

    this.details.type = raceData.type;
  }
}

/* -------------------------------------------- */

/**
 * Data structure for character's resources.
 *
 * @typedef {object} ResourceData
 * @property {number} value  Available uses of this resource.
 * @property {number} max    Maximum allowed uses of this resource.
 * @property {boolean} sr    Does this resource recover on a short rest?
 * @property {boolean} lr    Does this resource recover on a long rest?
 * @property {string} label  Displayed name.
 */

/**
 * Produce the schema field for a simple trait.
 * @param {object} schemaOptions  Options passed to the outer schema.
 * @returns {ResourceData}
 */
function makeResourceField(schemaOptions={}) {
  return new foundry.data.fields.SchemaField({
    value: new foundry.data.fields.NumberField({
      required: true, integer: true, initial: 0, labels: "GENEFUNK2090.ResourceValue"
    }),
    max: new foundry.data.fields.NumberField({
      required: true, integer: true, initial: 0, labels: "GENEFUNK2090.ResourceMax"
    }),
    sr: new foundry.data.fields.BooleanField({required: true, labels: "GENEFUNK2090.ShortRestRecovery"}),
    lr: new foundry.data.fields.BooleanField({required: true, labels: "GENEFUNK2090.LongRestRecovery"}),
    label: new foundry.data.fields.StringField({required: true, labels: "GENEFUNK2090.ResourceLabel"})
  }, schemaOptions);
}
