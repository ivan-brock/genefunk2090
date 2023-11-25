import BaseConfigSheet from "./base-config.mjs";

/**
 * A simple form to set actor movement speeds.
 */
export default class ActorMovementConfig extends BaseConfigSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["genefunk2090"],
      template: "systems/genefunk2090/templates/apps/movement-config.hbs",
      width: 300,
      height: "auto",
      sheetConfig: false,
      keyPath: "system.attributes.movement"
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  get title() {
    return `${game.i18n.localize("GENEFUNK2090.MovementConfig")}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  getData(options={}) {
    const source = this.document.toObject();
    const movement = foundry.utils.getProperty(source, this.options.keyPath) ?? {};
    const raceData = this.document.system.details?.race?.system?.movement ?? {};

    // Allowed speeds
    const speeds = source.type === "group" ? {
      land: "GENEFUNK2090.MovementLand",
      water: "GENEFUNK2090.MovementWater",
      air: "GENEFUNK2090.MovementAir"
    } : {
      walk: "GENEFUNK2090.MovementWalk",
      burrow: "GENEFUNK2090.MovementBurrow",
      climb: "GENEFUNK2090.MovementClimb",
      fly: "GENEFUNK2090.MovementFly",
      swim: "GENEFUNK2090.MovementSwim"
    };

    return {
      movement,
      movements: Object.entries(speeds).reduce((obj, [k, label]) => {
        obj[k] = { label, value: movement[k], placeholder: raceData[k] ?? 0 };
        return obj;
      }, {}),
      selectUnits: Object.hasOwn(movement, "units"),
      canHover: Object.hasOwn(movement, "hover"),
      units: CONFIG.GENEFUNK2090.movementUnits,
      unitsPlaceholder: game.i18n.format("GENEFUNK2090.AutomaticValue", {
        value: CONFIG.GENEFUNK2090.movementUnits[raceData.units ?? Object.keys(CONFIG.GENEFUNK2090.movementUnits)[0]]?.toLowerCase()
      }),
      keyPath: this.options.keyPath
    };
  }
}
