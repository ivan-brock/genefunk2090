/**
 * Mixin method for common uses between all actor sheets.
 * @mixin
 */
export const ActorSheetMixin = Base => class extends Base {
  /**
   * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs.
   * @param {Event} event  Triggering event.
   * @protected
   */
  _onChangeInputDelta(event) {
    const input = event.target;
    const value = input.value;
    if ( ["+", "-"].includes(value[0]) ) {
      const delta = parseFloat(value);
      const item = this.actor.items.get(input.closest("[data-item-id]")?.dataset.itemId);
      if ( item ) input.value = Number(foundry.utils.getProperty(item, input.dataset.name)) + delta;
      else input.value = Number(foundry.utils.getProperty(this.actor, input.name)) + delta;
    } else if ( value[0] === "=" ) input.value = value.slice(1);
  }

  /* -------------------------------------------- */

  /**
   * Prepare an array of context menu options which are available for owned ActiveEffect documents.
   * @param {ActiveEffect5e} effect         The ActiveEffect for which the context menu is activated
   * @returns {ContextMenuEntry[]}          An array of context menu options offered for the ActiveEffect
   * @protected
   */
  _getActiveEffectContextOptions(effect) {
    return [
      {
        name: "GENEFUNK2090.ContextMenuActionEdit",
        icon: "<i class='fas fa-edit fa-fw'></i>",
        condition: () => effect.isOwner,
        callback: () => effect.sheet.render(true)
      },
      {
        name: "GENEFUNK2090.ContextMenuActionDuplicate",
        icon: "<i class='fas fa-copy fa-fw'></i>",
        condition: () => effect.isOwner,
        callback: () => effect.clone({label: game.i18n.format("DOCUMENT.CopyOf", {name: effect.label})}, {save: true})
      },
      {
        name: "GENEFUNK2090.ContextMenuActionDelete",
        icon: "<i class='fas fa-trash fa-fw'></i>",
        condition: () => effect.isOwner,
        callback: () => effect.deleteDialog()
      },
      {
        name: effect.disabled ? "GENEFUNK2090.ContextMenuActionEnable" : "GENEFUNK2090.ContextMenuActionDisable",
        icon: effect.disabled ? "<i class='fas fa-check fa-fw'></i>" : "<i class='fas fa-times fa-fw'></i>",
        condition: () => effect.isOwner,
        callback: () => effect.update({disabled: !effect.disabled})
      }
    ];
  }

  /* -------------------------------------------- */

  /**
   * Prepare an array of context menu options which are available for owned Item documents.
   * @param {Item5e} item                   The Item for which the context menu is activated
   * @returns {ContextMenuEntry[]}          An array of context menu options offered for the Item
   * @protected
   */
  _getItemContextOptions(item) {

    // Standard Options
    const options = [
      {
        name: "GENEFUNK2090.ContextMenuActionEdit",
        icon: "<i class='fas fa-edit fa-fw'></i>",
        condition: () => item.isOwner,
        callback: () => item.sheet.render(true)
      },
      {
        name: "GENEFUNK2090.ContextMenuActionDuplicate",
        icon: "<i class='fas fa-copy fa-fw'></i>",
        condition: () => !["race", "background", "class", "subclass"].includes(item.type) && item.actor.isOwner,
        callback: () => item.clone({name: game.i18n.format("DOCUMENT.CopyOf", {name: item.name})}, {save: true})
      },
      {
        name: "GENEFUNK2090.ContextMenuActionDelete",
        icon: "<i class='fas fa-trash fa-fw'></i>",
        condition: () => item.isOwner,
        callback: () => item.deleteDialog()
      }
    ];

    // Toggle Attunement State
    if ( ("attunement" in item.system) && (item.system.attunement !== CONFIG.GENEFUNK2090.attunementTypes.NONE) ) {
      const isAttuned = item.system.attunement === CONFIG.GENEFUNK2090.attunementTypes.ATTUNED;
      options.push({
        name: isAttuned ? "GENEFUNK2090.ContextMenuActionUnattune" : "GENEFUNK2090.ContextMenuActionAttune",
        icon: "<i class='fas fa-sun fa-fw'></i>",
        condition: () => item.isOwner,
        callback: () => item.update({
          "system.attunement": CONFIG.GENEFUNK2090.attunementTypes[isAttuned ? "REQUIRED" : "ATTUNED"]
        })
      });
    }

    // Toggle Equipped State
    if ( "equipped" in item.system ) options.push({
      name: item.system.equipped ? "GENEFUNK2090.ContextMenuActionUnequip" : "GENEFUNK2090.ContextMenuActionEquip",
      icon: "<i class='fas fa-shield-alt fa-fw'></i>",
      condition: () => item.isOwner,
      callback: () => item.update({"system.equipped": !item.system.equipped})
    });

    // Toggle Prepared State
    if ( ("preparation" in item.system) && (item.system.preparation?.mode === "prepared") ) options.push({
      name: item.system?.preparation?.prepared ? "GENEFUNK2090.ContextMenuActionUnprepare" : "GENEFUNK2090.ContextMenuActionPrepare",
      icon: "<i class='fas fa-sun fa-fw'></i>",
      condition: () => item.isOwner,
      callback: () => item.update({"system.preparation.prepared": !item.system.preparation?.prepared})
    });
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Handle toggling and items expanded description.
   * @param {Event} event   Triggering event.
   * @private
   */
  async _onItemSummary(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const item = this.actor.items.get(li.data("item-id"));
    const chatData = await item.getChatData({secrets: this.actor.isOwner});

    // Toggle summary
    if ( li.hasClass("expanded") ) {
      const summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
      this._expanded.delete(item.id);
    } else {
      const summary = $(await renderTemplate("systems/genefunk2090/templates/items/parts/item-summary.hbs", chatData));
      li.append(summary.hide());
      summary.slideDown(200);
      this._expanded.add(item.id);
    }
    li.toggleClass("expanded");
  }

  /* -------------------------------------------- */

  /**
   * Change the uses amount of an Owned Item within the Actor.
   * @param {Event} event        The triggering click event.
   * @returns {Promise<Item5e>}  Updated item.
   * @protected
   */
  async _onUsesChange(event) {
    event.preventDefault();
    const itemId = event.currentTarget.closest(".item").dataset.itemId;
    const item = this.actor.items.get(itemId);
    const uses = Math.clamped(0, parseInt(event.target.value || 0), item.system.uses.max);
    event.target.value = uses;
    return item.update({"system.uses.value": uses});
  }

  /* -------------------------------------------- */

  /**
   * Change the quantity of an Owned Item within the actor.
   * @param {Event} event        The triggering click event.
   * @returns {Promise<Item5e>}  Updated item.
   * @protected
   */
  async _onQuantityChange(event) {
    event.preventDefault();
    const itemId = event.currentTarget.closest(".item").dataset.itemId;
    const item = this.actor.items.get(itemId);
    const quantity = Math.max(0, parseInt(event.target.value || 0));
    event.target.value = quantity;
    return item.update({"system.quantity": quantity});
  }

  /* -------------------------------------------- */

  /**
   * Stack identical consumables when a new one is dropped rather than creating a duplicate item.
   * @param {object} itemData         The item data requested for creation.
   * @returns {Promise<Item5e>|null}  If a duplicate was found, returns the adjusted item stack.
   */
  _onDropStackConsumables(itemData) {
    const droppedSourceId = itemData.flags.core?.sourceId;
    if ( itemData.type !== "consumable" || !droppedSourceId ) return null;
    const similarItem = this.actor.items.find(i => {
      const sourceId = i.getFlag("core", "sourceId");
      return sourceId && (sourceId === droppedSourceId) && (i.type === "consumable") && (i.name === itemData.name);
    });
    if ( !similarItem ) return null;
    return similarItem.update({
      "system.quantity": similarItem.system.quantity + Math.max(itemData.system.quantity, 1)
    });
  }
}
