import BaseConfigSheet from "./base-config.mjs";

/**
 * A simple form to set save throw configuration for a given ability score.
 *
 * @param {Actor5e} actor               The Actor instance being displayed within the sheet.
 * @param {ApplicationOptions} options  Additional application configuration options.
 * @param {string} abilityId            The ability key as defined in CONFIG.GENEFUNK2090.abilities.
 */
export default class ActorAbilityConfig extends BaseConfigSheet {
  constructor(actor, options, abilityId) {
    super(actor, options);
    this._abilityId = abilityId;
  }

  /* -------------------------------------------- */

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["genefunk2090"],
      template: "systems/genefunk2090/templates/apps/ability-config.hbs",
      width: 500,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.format("GENEFUNK2090.AbilityConfigureTitle", {
      ability: CONFIG.GENEFUNK2090.abilities[this._abilityId].label})}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const src = this.document.toObject();
    const ability = CONFIG.GENEFUNK2090.abilities[this._abilityId].label;
    return {
      ability: src.system.abilities[this._abilityId] ?? this.document.system.abilities[this._abilityId] ?? {},
      labelSaves: game.i18n.format("GENEFUNK2090.AbilitySaveConfigure", {ability}),
      labelChecks: game.i18n.format("GENEFUNK2090.AbilityCheckConfigure", {ability}),
      abilityId: this._abilityId,
      proficiencyLevels: {
        0: CONFIG.GENEFUNK2090.proficiencyLevels[0],
        1: CONFIG.GENEFUNK2090.proficiencyLevels[1]
      },
      bonusGlobalSave: src.system.bonuses?.abilities?.save,
      bonusGlobalCheck: src.system.bonuses?.abilities?.check
    };
  }
}
