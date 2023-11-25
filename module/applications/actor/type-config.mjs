import Actor5e from "../../documents/actor/actor.mjs";

/**
 * A specialized form used to select from a checklist of attributes, traits, or properties
 */
export default class ActorTypeConfig extends DocumentSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["genefunk2090", "actor-type", "trait-selector"],
      template: "systems/genefunk2090/templates/apps/actor-type.hbs",
      width: 280,
      height: "auto",
      choices: {},
      allowCustom: true,
      minimum: 0,
      maximum: null,
      sheetConfig: false,
      keyPath: "system.details.type"
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  get title() {
    return `${game.i18n.localize("GENEFUNK2090.CreatureTypeTitle")}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  get id() {
    return `actor-type-${this.object.id}`;
  }

  /* -------------------------------------------- */

  /**
   * Return a reference to the Actor. Either the NPCs themselves if they are being edited, otherwise the parent Actor
   * if a race Item is being edited.
   * @returns {Actor5e}
   */
  get actor() {
    return this.object.actor ?? this.object;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  getData(options={}) {
    // Get current value or new default
    let attr = foundry.utils.getProperty(this.object, this.options.keyPath);
    if ( foundry.utils.getType(attr) !== "Object" ) attr = {
      value: (attr in CONFIG.GENEFUNK2090.creatureTypes) ? attr : "humanoid",
      subtype: "",
      swarm: "",
      custom: ""
    };

    // Populate choices
    const types = {};
    for ( let [k, v] of Object.entries(CONFIG.GENEFUNK2090.creatureTypes) ) {
      types[k] = {
        label: game.i18n.localize(v),
        chosen: attr.value === k
      };
    }

    // Return data for rendering
    return {
      types: types,
      custom: {
        value: attr.custom,
        label: game.i18n.localize("GENEFUNK2090.CreatureTypeSelectorCustom"),
        chosen: attr.value === "custom"
      },
      showCustom: Object.hasOwn(attr, "custom"),
      showSwarm: Object.hasOwn(attr, "swarm"),
      subtype: attr.subtype,
      swarm: attr.swarm,
      sizes: Array.from(Object.entries(CONFIG.GENEFUNK2090.actorSizes)).reverse().reduce((obj, e) => {
        obj[e[0]] = e[1];
        return obj;
      }, {}),
      preview: Actor5e.formatCreatureType(attr) || "–"
    };
  }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const typeObject = foundry.utils.expandObject(formData);
    return this.object.update({[this.options.keyPath]: typeObject});
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** @inheritdoc */
  activateListeners(html) {
    super.activateListeners(html);
    html.find("input[name='custom']").focusin(this._onCustomFieldFocused.bind(this));

    const overrides = Object.keys(foundry.utils.flattenObject(this.actor.overrides || {}));
    if ( overrides.some(k => k.startsWith("system.details.type.")) ) {
      // Disable editing any type field if one of them is overridden by an Active Effect.
      html.find("input, select").each((i, el) => {
        el.disabled = true;
        el.dataset.tooltip = "GENEFUNK2090.ActiveEffectOverrideWarning";
      });
    }
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  _onChangeInput(event) {
    super._onChangeInput(event);
    const typeObject = foundry.utils.expandObject(this._getSubmitData());
    this.form.preview.value = Actor5e.formatCreatureType(typeObject) || "—";
  }

  /* -------------------------------------------- */

  /**
   * Select the custom radio button when the custom text field is focused.
   * @param {FocusEvent} event      The original focusin event
   * @private
   */
  _onCustomFieldFocused(event) {
    this.form.querySelector("input[name='value'][value='custom']").checked = true;
    this._onChangeInput(event);
  }
}
