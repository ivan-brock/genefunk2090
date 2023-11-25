import BaseConfigSheet from "./base-config.mjs";

/**
 * A simple form to configure Actor senses.
 */
export default class ActorSensesConfig extends BaseConfigSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["genefunk2090"],
      template: "systems/genefunk2090/templates/apps/senses-config.hbs",
      width: 300,
      height: "auto",
      keyPath: "system.attributes.senses"
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  get title() {
    return `${game.i18n.localize("GENEFUNK2090.SensesConfig")}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  getData(options) {
    const source = this.document.toObject();
    const senses = foundry.utils.getProperty(source, this.options.keyPath) ?? {};
    const raceData = this.document.system.details?.race?.system?.senses ?? {};
    return foundry.utils.mergeObject(super.getData(options), {
      senses: Object.entries(CONFIG.GENEFUNK2090.senses).reduce((obj, [k, label]) => {
        obj[k] = { label, value: senses[k], placeholder: raceData[k] ?? 0 };
        return obj;
      }, {}),
      special: senses.special ?? "",
      units: senses.units, movementUnits: CONFIG.GENEFUNK2090.movementUnits,
      unitsPlaceholder: game.i18n.format("GENEFUNK2090.AutomaticValue", {
        value: CONFIG.GENEFUNK2090.movementUnits[raceData.units ?? Object.keys(CONFIG.GENEFUNK2090.movementUnits)[0]]?.toLowerCase()
      }),
      keyPath: this.options.keyPath
    });
  }
}
