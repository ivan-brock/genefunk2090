import * as advancement from "./documents/advancement/_module.mjs";
import { preLocalize } from "./utils.mjs";

// Namespace Configuration Values
const GENEFUNK2090 = {};

// ASCII Artwork
GENEFUNK2090.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;

/**
 * Configuration data for abilities.
 *
 * @typedef {object} AbilityConfiguration
 * @property {string} label                               Localized label.
 * @property {string} abbreviation                        Localized abbreviation.
 * @property {string} fullKey                             Fully written key used as alternate for enrichers.
 * @property {string} [type]                              Whether this is a "physical" or "mental" ability.
 * @property {Object<string, number|string>}  [defaults]  Default values for this ability based on actor type.
 *                                                        If a string is used, the system will attempt to fetch.
 *                                                        the value of the specified ability.
 */

/**
 * The set of Ability Scores used within the system.
 * @enum {AbilityConfiguration}
 */
GENEFUNK2090.abilities = {
  str: {
    label: "GENEFUNK2090.AbilityStr",
    abbreviation: "GENEFUNK2090.AbilityStrAbbr",
    type: "physical",
    fullKey: "strength"
  },
  dex: {
    label: "GENEFUNK2090.AbilityDex",
    abbreviation: "GENEFUNK2090.AbilityDexAbbr",
    type: "physical",
    fullKey: "dexterity"
  },
  con: {
    label: "GENEFUNK2090.AbilityCon",
    abbreviation: "GENEFUNK2090.AbilityConAbbr",
    type: "physical",
    fullKey: "constitution"
  },
  int: {
    label: "GENEFUNK2090.AbilityInt",
    abbreviation: "GENEFUNK2090.AbilityIntAbbr",
    type: "mental",
    fullKey: "intelligence",
    defaults: { vehicle: 0 }
  },
  wis: {
    label: "GENEFUNK2090.AbilityWis",
    abbreviation: "GENEFUNK2090.AbilityWisAbbr",
    type: "mental",
    fullKey: "wisdom",
    defaults: { vehicle: 0 }
  },
  cha: {
    label: "GENEFUNK2090.AbilityCha",
    abbreviation: "GENEFUNK2090.AbilityChaAbbr",
    type: "mental",
    fullKey: "charisma",
    defaults: { vehicle: 0 }
  },
  hon: {
    label: "GENEFUNK2090.AbilityHon",
    abbreviation: "GENEFUNK2090.AbilityHonAbbr",
    type: "mental",
    fullKey: "honor",
    defaults: { npc: "cha", vehicle: 0 },
    improvement: false
  },
  san: {
    label: "GENEFUNK2090.AbilitySan",
    abbreviation: "GENEFUNK2090.AbilitySanAbbr",
    type: "mental",
    fullKey: "sanity",
    defaults: { npc: "wis", vehicle: 0 },
    improvement: false
  }
};
preLocalize("abilities", { keys: ["label", "abbreviation"] });

/**
 * Configure which ability score is used as the default modifier for initiative rolls.
 * @type {string}
 */
GENEFUNK2090.initiativeAbility = "dex";

/**
 * Configure which ability score is used when calculating hit points per level.
 * @type {string}
 */
GENEFUNK2090.hitPointsAbility = "con";

/* -------------------------------------------- */

/**
 * Configuration data for skills.
 *
 * @typedef {object} SkillConfiguration
 * @property {string} label    Localized label.
 * @property {string} ability  Key for the default ability used by this skill.
 * @property {string} fullKey  Fully written key used as alternate for enrichers.
 */

/**
 * The set of skill which can be trained with their default ability scores.
 * @enum {SkillConfiguration}
 */
GENEFUNK2090.skills = {
  acr: { label: "GENEFUNK2090.SkillAcr", ability: "dex", fullKey: "acrobatics" },
  ani: { label: "GENEFUNK2090.SkillAni", ability: "wis", fullKey: "animalHandling" },
  arc: { label: "GENEFUNK2090.SkillArc", ability: "int", fullKey: "arcana" },
  ath: { label: "GENEFUNK2090.SkillAth", ability: "str", fullKey: "athletics" },
  dec: { label: "GENEFUNK2090.SkillDec", ability: "cha", fullKey: "deception" },
  his: { label: "GENEFUNK2090.SkillHis", ability: "int", fullKey: "history" },
  ins: { label: "GENEFUNK2090.SkillIns", ability: "wis", fullKey: "insight" },
  itm: { label: "GENEFUNK2090.SkillItm", ability: "cha", fullKey: "intimidation" },
  inv: { label: "GENEFUNK2090.SkillInv", ability: "int", fullKey: "investigation" },
  med: { label: "GENEFUNK2090.SkillMed", ability: "wis", fullKey: "medicine" },
  nat: { label: "GENEFUNK2090.SkillNat", ability: "int", fullKey: "nature" },
  prc: { label: "GENEFUNK2090.SkillPrc", ability: "wis", fullKey: "perception" },
  prf: { label: "GENEFUNK2090.SkillPrf", ability: "cha", fullKey: "performance" },
  per: { label: "GENEFUNK2090.SkillPer", ability: "cha", fullKey: "persuasion" },
  rel: { label: "GENEFUNK2090.SkillRel", ability: "int", fullKey: "religion" },
  slt: { label: "GENEFUNK2090.SkillSlt", ability: "dex", fullKey: "sleightOfHand" },
  ste: { label: "GENEFUNK2090.SkillSte", ability: "dex", fullKey: "stealth" },
  sur: { label: "GENEFUNK2090.SkillSur", ability: "wis", fullKey: "survival" }
};
preLocalize("skills", { key: "label", sort: true });

/* -------------------------------------------- */

/**
 * Character alignment options.
 * @enum {string}
 */
GENEFUNK2090.alignments = {
  lg: "GENEFUNK2090.AlignmentLG",
  ng: "GENEFUNK2090.AlignmentNG",
  cg: "GENEFUNK2090.AlignmentCG",
  ln: "GENEFUNK2090.AlignmentLN",
  tn: "GENEFUNK2090.AlignmentTN",
  cn: "GENEFUNK2090.AlignmentCN",
  le: "GENEFUNK2090.AlignmentLE",
  ne: "GENEFUNK2090.AlignmentNE",
  ce: "GENEFUNK2090.AlignmentCE"
};
preLocalize("alignments");

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types.
 * @enum {number}
 */
GENEFUNK2090.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2
};

/**
 * An enumeration of item attunement states.
 * @type {{"0": string, "1": string, "2": string}}
 */
GENEFUNK2090.attunements = {
  0: "GENEFUNK2090.AttunementNone",
  1: "GENEFUNK2090.AttunementRequired",
  2: "GENEFUNK2090.AttunementAttuned"
};
preLocalize("attunements");

/* -------------------------------------------- */

/**
 * General weapon categories.
 * @enum {string}
 */
GENEFUNK2090.weaponProficiencies = {
  sim: "GENEFUNK2090.WeaponSimpleProficiency",
  mar: "GENEFUNK2090.WeaponMartialProficiency"
};
preLocalize("weaponProficiencies");

/**
 * A mapping between `GENEFUNK2090.weaponTypes` and `GENEFUNK2090.weaponProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
GENEFUNK2090.weaponProficienciesMap = {
  simpleM: "sim",
  simpleR: "sim",
  martialM: "mar",
  martialR: "mar"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
GENEFUNK2090.weaponIds = {
  battleaxe: "I0WocDSuNpGJayPb",
  blowgun: "wNWK6yJMHG9ANqQV",
  club: "nfIRTECQIG81CvM4",
  dagger: "0E565kQUBmndJ1a2",
  dart: "3rCO8MTIdPGSW6IJ",
  flail: "UrH3sMdnUDckIHJ6",
  glaive: "rOG1OM2ihgPjOvFW",
  greataxe: "1Lxk6kmoRhG8qQ0u",
  greatclub: "QRCsxkCwWNwswL9o",
  greatsword: "xMkP8BmFzElcsMaR",
  halberd: "DMejWAc8r8YvDPP1",
  handaxe: "eO7Fbv5WBk5zvGOc",
  handcrossbow: "qaSro7kFhxD6INbZ",
  heavycrossbow: "RmP0mYRn2J7K26rX",
  javelin: "DWLMnODrnHn8IbAG",
  lance: "RnuxdHUAIgxccVwj",
  lightcrossbow: "ddWvQRLmnnIS0eLF",
  lighthammer: "XVK6TOL4sGItssAE",
  longbow: "3cymOVja8jXbzrdT",
  longsword: "10ZP2Bu3vnCuYMIB",
  mace: "Ajyq6nGwF7FtLhDQ",
  maul: "DizirD7eqjh8n95A",
  morningstar: "dX8AxCh9o0A9CkT3",
  net: "aEiM49V8vWpWw7rU",
  pike: "tC0kcqZT9HHAO0PD",
  quarterstaff: "g2dWN7PQiMRYWzyk",
  rapier: "Tobce1hexTnDk4sV",
  scimitar: "fbC0Mg1a73wdFbqO",
  shortsword: "osLzOwQdPtrK3rQH",
  sickle: "i4NeNZ30ycwPDHMx",
  spear: "OG4nBBydvmfWYXIk",
  shortbow: "GJv6WkD7D2J6rP6M",
  sling: "3gynWO9sN4OLGMWD",
  trident: "F65ANO66ckP8FDMa",
  warpick: "2YdfjN1PIIrSHZii",
  warhammer: "F0Df164Xv1gWcYt0",
  whip: "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */

/**
 * The basic ammunition types.
 * @enum {string}
 */
GENEFUNK2090.ammoIds = {
  arrow: "3c7JXOzsv55gqJS5",
  blowgunNeedle: "gBQ8xqTA5f8wP5iu",
  crossbowBolt: "SItCnYBqhzqBoaWG",
  slingBullet: "z9SbsMIBZzuhZOqT"
};

/* -------------------------------------------- */

/**
 * The categories into which Tool items can be grouped.
 *
 * @enum {string}
 */
GENEFUNK2090.toolTypes = {
  art: "GENEFUNK2090.ToolArtisans",
  game: "GENEFUNK2090.ToolGamingSet",
  music: "GENEFUNK2090.ToolMusicalInstrument"
};
preLocalize("toolTypes", { sort: true });

/**
 * The categories of tool proficiencies that a character can gain.
 *
 * @enum {string}
 */
GENEFUNK2090.toolProficiencies = {
  ...GENEFUNK2090.toolTypes,
  vehicle: "GENEFUNK2090.ToolVehicle"
};
preLocalize("toolProficiencies", { sort: true });

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
GENEFUNK2090.toolIds = {
  alchemist: "SztwZhbhZeCqyAes",
  bagpipes: "yxHi57T5mmVt0oDr",
  brewer: "Y9S75go1hLMXUD48",
  calligrapher: "jhjo20QoiD5exf09",
  card: "YwlHI3BVJapz4a3E",
  carpenter: "8NS6MSOdXtUqD7Ib",
  cartographer: "fC0lFK8P4RuhpfaU",
  chess: "23y8FvWKf9YLcnBL",
  cobbler: "hM84pZnpCqKfi8XH",
  cook: "Gflnp29aEv5Lc1ZM",
  dice: "iBuTM09KD9IoM5L8",
  disg: "IBhDAr7WkhWPYLVn",
  drum: "69Dpr25pf4BjkHKb",
  dulcimer: "NtdDkjmpdIMiX7I2",
  flute: "eJOrPcAz9EcquyRQ",
  forg: "cG3m4YlHfbQlLEOx",
  glassblower: "rTbVrNcwApnuTz5E",
  herb: "i89okN7GFTWHsvPy",
  horn: "aa9KuBy4dst7WIW9",
  jeweler: "YfBwELTgPFHmQdHh",
  leatherworker: "PUMfwyVUbtyxgYbD",
  lute: "qBydtUUIkv520DT7",
  lyre: "EwG1EtmbgR3bM68U",
  mason: "skUih6tBvcBbORzA",
  navg: "YHCmjsiXxZ9UdUhU",
  painter: "ccm5xlWhx74d6lsK",
  panflute: "G5m5gYIx9VAUWC3J",
  pois: "il2GNi8C0DvGLL9P",
  potter: "hJS8yEVkqgJjwfWa",
  shawm: "G3cqbejJpfB91VhP",
  smith: "KndVe2insuctjIaj",
  thief: "woWZ1sO5IUVGzo58",
  tinker: "0d08g1i5WXnNrCNA",
  viol: "baoe3U5BfMMMxhCU",
  weaver: "ap9prThUB2y9lDyj",
  woodcarver: "xKErqkLo4ASYr5EP"
};

/* -------------------------------------------- */

/**
 * Time periods that accept a numeric value.
 * @enum {string}
 */
GENEFUNK2090.scalarTimePeriods = {
  turn: "GENEFUNK2090.TimeTurn",
  round: "GENEFUNK2090.TimeRound",
  minute: "GENEFUNK2090.TimeMinute",
  hour: "GENEFUNK2090.TimeHour",
  day: "GENEFUNK2090.TimeDay",
  month: "GENEFUNK2090.TimeMonth",
  year: "GENEFUNK2090.TimeYear"
};
preLocalize("scalarTimePeriods");

/* -------------------------------------------- */

/**
 * Time periods for spells that don't have a defined ending.
 * @enum {string}
 */
GENEFUNK2090.permanentTimePeriods = {
  disp: "GENEFUNK2090.TimeDisp",
  dstr: "GENEFUNK2090.TimeDispTrig",
  perm: "GENEFUNK2090.TimePerm"
};
preLocalize("permanentTimePeriods");

/* -------------------------------------------- */

/**
 * Time periods that don't accept a numeric value.
 * @enum {string}
 */
GENEFUNK2090.specialTimePeriods = {
  inst: "GENEFUNK2090.TimeInst",
  spec: "GENEFUNK2090.Special"
};
preLocalize("specialTimePeriods");

/* -------------------------------------------- */

/**
 * The various lengths of time over which effects can occur.
 * @enum {string}
 */
GENEFUNK2090.timePeriods = {
  ...GENEFUNK2090.specialTimePeriods,
  ...GENEFUNK2090.permanentTimePeriods,
  ...GENEFUNK2090.scalarTimePeriods
};
preLocalize("timePeriods");

/* -------------------------------------------- */

/**
 * Ways in which to activate an item that cannot be labeled with a cost.
 * @enum {string}
 */
GENEFUNK2090.staticAbilityActivationTypes = {
  none: "GENEFUNK2090.NoneActionLabel",
  special: GENEFUNK2090.timePeriods.spec
};

/**
 * Various ways in which an item or ability can be activated.
 * @enum {string}
 */
GENEFUNK2090.abilityActivationTypes = {
  ...GENEFUNK2090.staticAbilityActivationTypes,
  action: "GENEFUNK2090.Action",
  bonus: "GENEFUNK2090.BonusAction",
  reaction: "GENEFUNK2090.Reaction",
  minute: GENEFUNK2090.timePeriods.minute,
  hour: GENEFUNK2090.timePeriods.hour,
  day: GENEFUNK2090.timePeriods.day,
  legendary: "GENEFUNK2090.LegendaryActionLabel",
  mythic: "GENEFUNK2090.MythicActionLabel",
  lair: "GENEFUNK2090.LairActionLabel",
  crew: "GENEFUNK2090.VehicleCrewAction"
};
preLocalize("abilityActivationTypes");

/* -------------------------------------------- */

/**
 * Different things that an ability can consume upon use.
 * @enum {string}
 */
GENEFUNK2090.abilityConsumptionTypes = {
  ammo: "GENEFUNK2090.ConsumeAmmunition",
  attribute: "GENEFUNK2090.ConsumeAttribute",
  hitDice: "GENEFUNK2090.ConsumeHitDice",
  material: "GENEFUNK2090.ConsumeMaterial",
  charges: "GENEFUNK2090.ConsumeCharges"
};
preLocalize("abilityConsumptionTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Creature sizes.
 * @enum {string}
 */
GENEFUNK2090.actorSizes = {
  tiny: "GENEFUNK2090.SizeTiny",
  sm: "GENEFUNK2090.SizeSmall",
  med: "GENEFUNK2090.SizeMedium",
  lg: "GENEFUNK2090.SizeLarge",
  huge: "GENEFUNK2090.SizeHuge",
  grg: "GENEFUNK2090.SizeGargantuan"
};
preLocalize("actorSizes");

/**
 * Default token image size for the values of `GENEFUNK2090.actorSizes`.
 * @enum {number}
 */
GENEFUNK2090.tokenSizes = {
  tiny: 0.5,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
GENEFUNK2090.tokenHPColors = {
  damage: 0xFF0000,
  healing: 0x00FF00,
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
};

/* -------------------------------------------- */

/**
 * Default types of creatures.
 * *Note: Not pre-localized to allow for easy fetching of pluralized forms.*
 * @enum {string}
 */
GENEFUNK2090.creatureTypes = {
  aberration: "GENEFUNK2090.CreatureAberration",
  beast: "GENEFUNK2090.CreatureBeast",
  celestial: "GENEFUNK2090.CreatureCelestial",
  construct: "GENEFUNK2090.CreatureConstruct",
  dragon: "GENEFUNK2090.CreatureDragon",
  elemental: "GENEFUNK2090.CreatureElemental",
  fey: "GENEFUNK2090.CreatureFey",
  fiend: "GENEFUNK2090.CreatureFiend",
  giant: "GENEFUNK2090.CreatureGiant",
  humanoid: "GENEFUNK2090.CreatureHumanoid",
  monstrosity: "GENEFUNK2090.CreatureMonstrosity",
  ooze: "GENEFUNK2090.CreatureOoze",
  plant: "GENEFUNK2090.CreaturePlant",
  undead: "GENEFUNK2090.CreatureUndead"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types.
 * @enum {string}
 */
GENEFUNK2090.itemActionTypes = {
  mwak: "GENEFUNK2090.ActionMWAK",
  rwak: "GENEFUNK2090.ActionRWAK",
  msak: "GENEFUNK2090.ActionMSAK",
  rsak: "GENEFUNK2090.ActionRSAK",
  save: "GENEFUNK2090.ActionSave",
  heal: "GENEFUNK2090.ActionHeal",
  abil: "GENEFUNK2090.ActionAbil",
  util: "GENEFUNK2090.ActionUtil",
  other: "GENEFUNK2090.ActionOther"
};
preLocalize("itemActionTypes");

/* -------------------------------------------- */

/**
 * Different ways in which item capacity can be limited.
 * @enum {string}
 */
GENEFUNK2090.itemCapacityTypes = {
  items: "GENEFUNK2090.ItemContainerCapacityItems",
  weight: "GENEFUNK2090.ItemContainerCapacityWeight"
};
preLocalize("itemCapacityTypes", { sort: true });

/* -------------------------------------------- */

/**
 * List of various item rarities.
 * @enum {string}
 */
GENEFUNK2090.itemRarity = {
  common: "GENEFUNK2090.ItemRarityCommon",
  uncommon: "GENEFUNK2090.ItemRarityUncommon",
  rare: "GENEFUNK2090.ItemRarityRare",
  veryRare: "GENEFUNK2090.ItemRarityVeryRare",
  legendary: "GENEFUNK2090.ItemRarityLegendary",
  artifact: "GENEFUNK2090.ItemRarityArtifact"
};
preLocalize("itemRarity");

/* -------------------------------------------- */

/**
 * The limited use periods that support a recovery formula.
 * @enum {string}
 */
GENEFUNK2090.limitedUseFormulaPeriods = {
  charges: "GENEFUNK2090.Charges",
  dawn: "GENEFUNK2090.Dawn",
  dusk: "GENEFUNK2090.Dusk"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability.
 * @enum {string}
 */
GENEFUNK2090.limitedUsePeriods = {
  sr: "GENEFUNK2090.ShortRest",
  lr: "GENEFUNK2090.LongRest",
  day: "GENEFUNK2090.Day",
  ...GENEFUNK2090.limitedUseFormulaPeriods
};
preLocalize("limitedUsePeriods");

/* -------------------------------------------- */

/**
 * Specific equipment types that modify base AC.
 * @enum {string}
 */
GENEFUNK2090.armorTypes = {
  light: "GENEFUNK2090.EquipmentLight",
  medium: "GENEFUNK2090.EquipmentMedium",
  heavy: "GENEFUNK2090.EquipmentHeavy",
  natural: "GENEFUNK2090.EquipmentNatural",
  shield: "GENEFUNK2090.EquipmentShield"
};
preLocalize("armorTypes");

/* -------------------------------------------- */

/**
 * Equipment types that aren't armor.
 * @enum {string}
 */
GENEFUNK2090.miscEquipmentTypes = {
  clothing: "GENEFUNK2090.EquipmentClothing",
  trinket: "GENEFUNK2090.EquipmentTrinket",
  vehicle: "GENEFUNK2090.EquipmentVehicle"
};
preLocalize("miscEquipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
 * @enum {string}
 */
GENEFUNK2090.equipmentTypes = {
  ...GENEFUNK2090.miscEquipmentTypes,
  ...GENEFUNK2090.armorTypes
};
preLocalize("equipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The various types of vehicles in which characters can be proficient.
 * @enum {string}
 */
GENEFUNK2090.vehicleTypes = {
  air: "GENEFUNK2090.VehicleTypeAir",
  land: "GENEFUNK2090.VehicleTypeLand",
  space: "GENEFUNK2090.VehicleTypeSpace",
  water: "GENEFUNK2090.VehicleTypeWater"
};
preLocalize("vehicleTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have.
 * @type {object}
 */
GENEFUNK2090.armorProficiencies = {
  lgt: GENEFUNK2090.equipmentTypes.light,
  med: GENEFUNK2090.equipmentTypes.medium,
  hvy: GENEFUNK2090.equipmentTypes.heavy,
  shl: "GENEFUNK2090.EquipmentShieldProficiency"
};
preLocalize("armorProficiencies");

/**
 * A mapping between `GENEFUNK2090.equipmentTypes` and `GENEFUNK2090.armorProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
GENEFUNK2090.armorProficienciesMap = {
  natural: true,
  clothing: true,
  light: "lgt",
  medium: "med",
  heavy: "hvy",
  shield: "shl"
};

/**
 * The basic armor types in 5e. This enables specific armor proficiencies,
 * automated AC calculation in NPCs, and starting equipment.
 * @enum {string}
 */
GENEFUNK2090.armorIds = {
  breastplate: "SK2HATQ4abKUlV8i",
  chainmail: "rLMflzmxpe8JGTOA",
  chainshirt: "p2zChy24ZJdVqMSH",
  halfplate: "vsgmACFYINloIdPm",
  hide: "n1V07puo0RQxPGuF",
  leather: "WwdpHLXGX5r8uZu5",
  padded: "GtKV1b5uqFQqpEni",
  plate: "OjkIqlW2UpgFcjZa",
  ringmail: "nsXZejlmgalj4he9",
  scalemail: "XmnlF5fgIO3tg6TG",
  splint: "cKpJmsJmU8YaiuqG",
  studded: "TIV3B1vbrVHIhQAm"
};

/**
 * The basic shield in 5e.
 * @enum {string}
 */
GENEFUNK2090.shieldIds = {
  shield: "sSs3hSzkKBMNBgTs"
};

/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
GENEFUNK2090.armorClasses = {
  flat: {
    label: "GENEFUNK2090.ArmorClassFlat",
    formula: "@attributes.ac.flat"
  },
  natural: {
    label: "GENEFUNK2090.ArmorClassNatural",
    formula: "@attributes.ac.flat"
  },
  default: {
    label: "GENEFUNK2090.ArmorClassEquipment",
    formula: "@attributes.ac.armor + @attributes.ac.dex"
  },
  mage: {
    label: "GENEFUNK2090.ArmorClassMage",
    formula: "13 + @abilities.dex.mod"
  },
  draconic: {
    label: "GENEFUNK2090.ArmorClassDraconic",
    formula: "13 + @abilities.dex.mod"
  },
  unarmoredMonk: {
    label: "GENEFUNK2090.ArmorClassUnarmoredMonk",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod"
  },
  unarmoredBarb: {
    label: "GENEFUNK2090.ArmorClassUnarmoredBarbarian",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod"
  },
  custom: {
    label: "GENEFUNK2090.ArmorClassCustom"
  }
};
preLocalize("armorClasses", { key: "label" });

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system.
 * @enum {string}
 */
GENEFUNK2090.consumableTypes = {
  ammo: "GENEFUNK2090.ConsumableAmmo",
  potion: "GENEFUNK2090.ConsumablePotion",
  poison: "GENEFUNK2090.ConsumablePoison",
  food: "GENEFUNK2090.ConsumableFood",
  scroll: "GENEFUNK2090.ConsumableScroll",
  wand: "GENEFUNK2090.ConsumableWand",
  rod: "GENEFUNK2090.ConsumableRod",
  trinket: "GENEFUNK2090.ConsumableTrinket"
};
preLocalize("consumableTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of containers.
 * @enum {string}
 */
GENEFUNK2090.containerTypes = {
  backpack: "H8YCd689ezlD26aT",
  barrel: "7Yqbqg5EtVW16wfT",
  basket: "Wv7HzD6dv1P0q78N",
  boltcase: "eJtPBiZtr2pp6ynt",
  bottle: "HZp69hhyNZUUCipF",
  bucket: "mQVYcHmMSoCUnBnM",
  case: "5mIeX824uMklU3xq",
  chest: "2YbuclKfhDL0bU4u",
  flask: "lHS63sC6bypENNlR",
  jug: "0ZBWwjFz3nIAXMLW",
  pot: "M8xM8BLK4tpUayEE",
  pitcher: "nXWdGtzi8DXDLLsL",
  pouch: "9bWTRRDym06PzSAf",
  quiver: "4MtQKPn9qMWCFjDA",
  sack: "CNdDj8dsXVpRVpXt",
  saddlebags: "TmfaFUSZJAotndn9",
  tankard: "uw6fINSmZ2j2o57A",
  vial: "meJEfX3gZgtMX4x2"
};

/* -------------------------------------------- */

/**
 * Configuration data for spellcasting foci.
 *
 * @typedef {object} SpellcastingFocusConfiguration
 * @property {string} label                    Localized label for this category.
 * @property {Object<string, string>} itemIds  Item IDs or UUIDs.
 */

/**
 * Type of spellcasting foci.
 * @enum {SpellcastingFocusConfiguration}
 */
GENEFUNK2090.focusTypes = {
  arcane: {
    label: "GENEFUNK2090.Focus.Arcane",
    itemIds: {
      crystal: "uXOT4fYbgPY8DGdd",
      orb: "tH5Rn0JVRG1zdmPa",
      rod: "OojyyGfh91iViuMF",
      staff: "BeKIrNIvNHRPQ4t5",
      wand: "KA2P6I48iOWlnboO"
    }
  },
  druidic: {
    label: "GENEFUNK2090.Focus.Druidic",
    itemIds: {
      mistletoe: "xDK9GQd2iqOGH8Sd",
      totem: "PGL6aaM0wE5h0VN5",
      woodenstaff: "FF1ktpb2YSiyv896",
      yewwand: "t5yP0d7YaKwuKKiH"
    }
  },
  holy: {
    label: "GENEFUNK2090.Focus.Holy",
    itemIds: {
      amulet: "paqlMjggWkBIAeCe",
      emblem: "laVqttkGMW4B9654",
      reliquary: "gP1URGq3kVIIFHJ7"
    }
  }
};

/* -------------------------------------------- */

/**
 * Configuration data for an item with the "feature" type.
 *
 * @typedef {object} FeatureTypeConfiguration
 * @property {string} label                       Localized label for this type.
 * @property {Object<string, string>} [subtypes]  Enum containing localized labels for subtypes.
 */

/**
 * Types of "features" items.
 * @enum {FeatureTypeConfiguration}
 */
GENEFUNK2090.featureTypes = {
  background: {
    label: "GENEFUNK2090.Feature.Background"
  },
  class: {
    label: "GENEFUNK2090.Feature.Class",
    subtypes: {
      arcaneShot: "GENEFUNK2090.ClassFeature.ArcaneShot",
      artificerInfusion: "GENEFUNK2090.ClassFeature.ArtificerInfusion",
      channelDivinity: "GENEFUNK2090.ClassFeature.ChannelDivinity",
      defensiveTactic: "GENEFUNK2090.ClassFeature.DefensiveTactic",
      eldritchInvocation: "GENEFUNK2090.ClassFeature.EldritchInvocation",
      elementalDiscipline: "GENEFUNK2090.ClassFeature.ElementalDiscipline",
      fightingStyle: "GENEFUNK2090.ClassFeature.FightingStyle",
      huntersPrey: "GENEFUNK2090.ClassFeature.HuntersPrey",
      ki: "GENEFUNK2090.ClassFeature.Ki",
      maneuver: "GENEFUNK2090.ClassFeature.Maneuver",
      metamagic: "GENEFUNK2090.ClassFeature.Metamagic",
      multiattack: "GENEFUNK2090.ClassFeature.Multiattack",
      pact: "GENEFUNK2090.ClassFeature.PactBoon",
      psionicPower: "GENEFUNK2090.ClassFeature.PsionicPower",
      rune: "GENEFUNK2090.ClassFeature.Rune",
      superiorHuntersDefense: "GENEFUNK2090.ClassFeature.SuperiorHuntersDefense"
    }
  },
  monster: {
    label: "GENEFUNK2090.Feature.Monster"
  },
  race: {
    label: "GENEFUNK2090.Feature.Race"
  },
  feat: {
    label: "GENEFUNK2090.Feature.Feat"
  }
};
preLocalize("featureTypes", { key: "label" });
preLocalize("featureTypes.class.subtypes", { sort: true });

/* -------------------------------------------- */

/**
 * Configuration data for an item with the "loot" type.
 *
 * @typedef {object} LootTypeConfiguration
 * @property {string} label                       Localized label for this type.
 */

/**
 * Types of "loot" items.
 * @enum {LootTypeConfiguration}
 */
GENEFUNK2090.lootTypes = {
  art: {
    label: "GENEFUNK2090.Loot.Art"
  },
  gear: {
    label: "GENEFUNK2090.Loot.Gear"
  },
  gem: {
    label: "GENEFUNK2090.Loot.Gem"
  },
  junk: {
    label: "GENEFUNK2090.Loot.Junk"
  },
  material: {
    label: "GENEFUNK2090.Loot.Material"
  },
  resource: {
    label: "GENEFUNK2090.Loot.Resource"
  },
  treasure: {
    label: "GENEFUNK2090.Loot.Treasure"
  }
};
preLocalize("lootTypes", { key: "label" });

/* -------------------------------------------- */

/**
 * @typedef {object} CurrencyConfiguration
 * @property {string} label         Localized label for the currency.
 * @property {string} abbreviation  Localized abbreviation for the currency.
 * @property {number} conversion    Number by which this currency should be multiplied to arrive at a standard value.
 */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * The conversion number defines how many of that currency are equal to one GP.
 * @enum {CurrencyConfiguration}
 */
GENEFUNK2090.currencies = {
  pp: {
    label: "GENEFUNK2090.CurrencyPP",
    abbreviation: "GENEFUNK2090.CurrencyAbbrPP",
    conversion: 0.1
  },
  gp: {
    label: "GENEFUNK2090.CurrencyGP",
    abbreviation: "GENEFUNK2090.CurrencyAbbrGP",
    conversion: 1
  },
  ep: {
    label: "GENEFUNK2090.CurrencyEP",
    abbreviation: "GENEFUNK2090.CurrencyAbbrEP",
    conversion: 2
  },
  sp: {
    label: "GENEFUNK2090.CurrencySP",
    abbreviation: "GENEFUNK2090.CurrencyAbbrSP",
    conversion: 10
  },
  cp: {
    label: "GENEFUNK2090.CurrencyCP",
    abbreviation: "GENEFUNK2090.CurrencyAbbrCP",
    conversion: 100
  }
};
preLocalize("currencies", { keys: ["label", "abbreviation"] });

/* -------------------------------------------- */
/*  Damage Types                                */
/* -------------------------------------------- */

/**
 * Types of damage that are considered physical.
 * @enum {string}
 */
GENEFUNK2090.physicalDamageTypes = {
  bludgeoning: "GENEFUNK2090.DamageBludgeoning",
  piercing: "GENEFUNK2090.DamagePiercing",
  slashing: "GENEFUNK2090.DamageSlashing"
};
preLocalize("physicalDamageTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of damage the can be caused by abilities.
 * @enum {string}
 */
GENEFUNK2090.damageTypes = {
  ...GENEFUNK2090.physicalDamageTypes,
  acid: "GENEFUNK2090.DamageAcid",
  cold: "GENEFUNK2090.DamageCold",
  fire: "GENEFUNK2090.DamageFire",
  force: "GENEFUNK2090.DamageForce",
  lightning: "GENEFUNK2090.DamageLightning",
  necrotic: "GENEFUNK2090.DamageNecrotic",
  poison: "GENEFUNK2090.DamagePoison",
  psychic: "GENEFUNK2090.DamagePsychic",
  radiant: "GENEFUNK2090.DamageRadiant",
  thunder: "GENEFUNK2090.DamageThunder"
};
preLocalize("damageTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
 * @enum {string}
 * @deprecated
 */
GENEFUNK2090.damageResistanceTypes = {
  ...GENEFUNK2090.damageTypes,
  physical: "GENEFUNK2090.DamagePhysical"
};
preLocalize("damageResistanceTypes", { sort: true });

/* -------------------------------------------- */
/*  Movement                                    */
/* -------------------------------------------- */

/**
 * Different types of healing that can be applied using abilities.
 * @enum {string}
 */
GENEFUNK2090.healingTypes = {
  healing: "GENEFUNK2090.Healing",
  temphp: "GENEFUNK2090.HealingTemp"
};
preLocalize("healingTypes");

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
GENEFUNK2090.movementTypes = {
  burrow: "GENEFUNK2090.MovementBurrow",
  climb: "GENEFUNK2090.MovementClimb",
  fly: "GENEFUNK2090.MovementFly",
  swim: "GENEFUNK2090.MovementSwim",
  walk: "GENEFUNK2090.MovementWalk"
};
preLocalize("movementTypes", { sort: true });

/* -------------------------------------------- */
/*  Measurement                                 */
/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
GENEFUNK2090.movementUnits = {
  ft: "GENEFUNK2090.DistFt",
  mi: "GENEFUNK2090.DistMi",
  m: "GENEFUNK2090.DistM",
  km: "GENEFUNK2090.DistKm"
};
preLocalize("movementUnits");

/* -------------------------------------------- */

/**
 * The types of range that are used for measuring actions and effects.
 * @enum {string}
 */
GENEFUNK2090.rangeTypes = {
  self: "GENEFUNK2090.DistSelf",
  touch: "GENEFUNK2090.DistTouch",
  spec: "GENEFUNK2090.Special",
  any: "GENEFUNK2090.DistAny"
};
preLocalize("rangeTypes");

/* -------------------------------------------- */

/**
 * The valid units of measure for the range of an action or effect. A combination of `GENEFUNK2090.movementUnits` and
 * `GENEFUNK2090.rangeUnits`.
 * @enum {string}
 */
GENEFUNK2090.distanceUnits = {
  ...GENEFUNK2090.movementUnits,
  ...GENEFUNK2090.rangeTypes
};
preLocalize("distanceUnits");

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules.
 * @enum {{ imperial: number, metric: number }}
 */
GENEFUNK2090.encumbrance = {
  currencyPerWeight: {
    imperial: 50,
    metric: 110
  },
  strMultiplier: {
    imperial: 15,
    metric: 6.8
  },
  vehicleWeightMultiplier: {
    imperial: 2000, // 2000 lbs in an imperial ton
    metric: 1000 // 1000 kg in a metric ton
  }
};

/* -------------------------------------------- */
/*  Targeting                                   */
/* -------------------------------------------- */

/**
 * Targeting types that apply to one or more distinct targets.
 * @enum {string}
 */
GENEFUNK2090.individualTargetTypes = {
  self: "GENEFUNK2090.TargetSelf",
  ally: "GENEFUNK2090.TargetAlly",
  enemy: "GENEFUNK2090.TargetEnemy",
  creature: "GENEFUNK2090.TargetCreature",
  object: "GENEFUNK2090.TargetObject",
  space: "GENEFUNK2090.TargetSpace",
  creatureOrObject: "GENEFUNK2090.TargetCreatureOrObject",
  any: "GENEFUNK2090.TargetAny",
  willing: "GENEFUNK2090.TargetWilling"
};
preLocalize("individualTargetTypes");

/* -------------------------------------------- */

/**
 * Information needed to represent different area of effect target types.
 *
 * @typedef {object} AreaTargetDefinition
 * @property {string} label     Localized label for this type.
 * @property {string} template  Type of `MeasuredTemplate` create for this target type.
 */

/**
 * Targeting types that cover an area.
 * @enum {AreaTargetDefinition}
 */
GENEFUNK2090.areaTargetTypes = {
  radius: {
    label: "GENEFUNK2090.TargetRadius",
    template: "circle"
  },
  sphere: {
    label: "GENEFUNK2090.TargetSphere",
    template: "circle"
  },
  cylinder: {
    label: "GENEFUNK2090.TargetCylinder",
    template: "circle"
  },
  cone: {
    label: "GENEFUNK2090.TargetCone",
    template: "cone"
  },
  square: {
    label: "GENEFUNK2090.TargetSquare",
    template: "rect"
  },
  cube: {
    label: "GENEFUNK2090.TargetCube",
    template: "rect"
  },
  line: {
    label: "GENEFUNK2090.TargetLine",
    template: "ray"
  },
  wall: {
    label: "GENEFUNK2090.TargetWall",
    template: "ray"
  }
};
preLocalize("areaTargetTypes", { key: "label", sort: true });

/* -------------------------------------------- */

/**
 * The types of single or area targets which can be applied to abilities.
 * @enum {string}
 */
GENEFUNK2090.targetTypes = {
  ...GENEFUNK2090.individualTargetTypes,
  ...Object.fromEntries(Object.entries(GENEFUNK2090.areaTargetTypes).map(([k, v]) => [k, v.label]))
};
preLocalize("targetTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Denominations of hit dice which can apply to classes.
 * @type {string[]}
 */
GENEFUNK2090.hitDieTypes = ["d4", "d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have.
 * @enum {string}
 */
GENEFUNK2090.senses = {
  blindsight: "GENEFUNK2090.SenseBlindsight",
  darkvision: "GENEFUNK2090.SenseDarkvision",
  tremorsense: "GENEFUNK2090.SenseTremorsense",
  truesight: "GENEFUNK2090.SenseTruesight"
};
preLocalize("senses", { sort: true });

/* -------------------------------------------- */
/*  Spellcasting                                */
/* -------------------------------------------- */

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {number[][]}
 */
GENEFUNK2090.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Configuration data for pact casting progression.
 *
 * @typedef {object} PactProgressionConfig
 * @property {number} slots  Number of spell slots granted.
 * @property {number} level  Level of spells that can be cast.
 */

/**
 * Define the pact slot & level progression by pact caster level.
 * @enum {PactProgressionConfig}
 */
GENEFUNK2090.pactCastingProgression = {
  1: { slots: 1, level: 1 },
  2: { slots: 2, level: 1 },
  3: { slots: 2, level: 2 },
  5: { slots: 2, level: 3 },
  7: { slots: 2, level: 4 },
  9: { slots: 2, level: 5 },
  11: { slots: 3, level: 5 },
  17: { slots: 4, level: 5 }
};

/* -------------------------------------------- */

/**
 * Various different ways a spell can be prepared.
 */
GENEFUNK2090.spellPreparationModes = {
  prepared: "GENEFUNK2090.SpellPrepPrepared",
  pact: "GENEFUNK2090.PactMagic",
  always: "GENEFUNK2090.SpellPrepAlways",
  atwill: "GENEFUNK2090.SpellPrepAtWill",
  innate: "GENEFUNK2090.SpellPrepInnate"
};
preLocalize("spellPreparationModes");

/* -------------------------------------------- */

/**
 * Subset of `GENEFUNK2090.spellPreparationModes` that consume spell slots.
 * @type {string[]}
 */
GENEFUNK2090.spellUpcastModes = ["always", "pact", "prepared"];

/* -------------------------------------------- */

/**
 * Configuration data for different types of spellcasting supported.
 *
 * @typedef {object} SpellcastingTypeConfiguration
 * @property {string} label                                                        Localized label.
 * @property {Object<string, SpellcastingProgressionConfiguration>} [progression]  Any progression modes for this type.
 */

/**
 * Configuration data for a spellcasting progression mode.
 *
 * @typedef {object} SpellcastingProgressionConfiguration
 * @property {string} label             Localized label.
 * @property {number} [divisor=1]       Value by which the class levels are divided to determine spellcasting level.
 * @property {boolean} [roundUp=false]  Should fractional values should be rounded up by default?
 */

/**
 * Different spellcasting types and their progression.
 * @type {SpellcastingTypeConfiguration}
 */
GENEFUNK2090.spellcastingTypes = {
  leveled: {
    label: "GENEFUNK2090.SpellProgLeveled",
    progression: {
      full: {
        label: "GENEFUNK2090.SpellProgFull",
        divisor: 1
      },
      half: {
        label: "GENEFUNK2090.SpellProgHalf",
        divisor: 2
      },
      third: {
        label: "GENEFUNK2090.SpellProgThird",
        divisor: 3
      },
      artificer: {
        label: "GENEFUNK2090.SpellProgArt",
        divisor: 2,
        roundUp: true
      }
    }
  },
  pact: {
    label: "GENEFUNK2090.SpellProgPact"
  }
};
preLocalize("spellcastingTypes", { key: "label", sort: true });
preLocalize("spellcastingTypes.leveled.progression", { key: "label" });

/* -------------------------------------------- */

/**
 * Ways in which a class can contribute to spellcasting levels.
 * @enum {string}
 */
GENEFUNK2090.spellProgression = {
  none: "GENEFUNK2090.SpellNone",
  full: "GENEFUNK2090.SpellProgFull",
  half: "GENEFUNK2090.SpellProgHalf",
  third: "GENEFUNK2090.SpellProgThird",
  pact: "GENEFUNK2090.SpellProgPact",
  artificer: "GENEFUNK2090.SpellProgArt"
};
preLocalize("spellProgression", { key: "label" });

/* -------------------------------------------- */

/**
 * Valid spell levels.
 * @enum {string}
 */
GENEFUNK2090.spellLevels = {
  0: "GENEFUNK2090.SpellLevel0",
  1: "GENEFUNK2090.SpellLevel1",
  2: "GENEFUNK2090.SpellLevel2",
  3: "GENEFUNK2090.SpellLevel3",
  4: "GENEFUNK2090.SpellLevel4",
  5: "GENEFUNK2090.SpellLevel5",
  6: "GENEFUNK2090.SpellLevel6",
  7: "GENEFUNK2090.SpellLevel7",
  8: "GENEFUNK2090.SpellLevel8",
  9: "GENEFUNK2090.SpellLevel9"
};
preLocalize("spellLevels");

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed.
 * @enum {string}
 */
GENEFUNK2090.spellScalingModes = {
  none: "GENEFUNK2090.SpellNone",
  cantrip: "GENEFUNK2090.SpellCantrip",
  level: "GENEFUNK2090.SpellLevel"
};
preLocalize("spellScalingModes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of components that can be required when casting a spell.
 * @enum {object}
 */
GENEFUNK2090.spellComponents = {
  vocal: {
    label: "GENEFUNK2090.ComponentVerbal",
    abbr: "GENEFUNK2090.ComponentVerbalAbbr"
  },
  somatic: {
    label: "GENEFUNK2090.ComponentSomatic",
    abbr: "GENEFUNK2090.ComponentSomaticAbbr"
  },
  material: {
    label: "GENEFUNK2090.ComponentMaterial",
    abbr: "GENEFUNK2090.ComponentMaterialAbbr"
  }
};
preLocalize("spellComponents", {keys: ["label", "abbr"]});

/* -------------------------------------------- */

/**
 * Supplementary rules keywords that inform a spell's use.
 * @enum {object}
 */
GENEFUNK2090.spellTags = {
  concentration: {
    label: "GENEFUNK2090.Concentration",
    abbr: "GENEFUNK2090.ConcentrationAbbr"
  },
  ritual: {
    label: "GENEFUNK2090.Ritual",
    abbr: "GENEFUNK2090.RitualAbbr"
  }
};
preLocalize("spellTags", {keys: ["label", "abbr"]});

/* -------------------------------------------- */

/**
 * Schools to which a spell can belong.
 * @enum {string}
 */
GENEFUNK2090.spellSchools = {
  abj: "GENEFUNK2090.SchoolAbj",
  con: "GENEFUNK2090.SchoolCon",
  div: "GENEFUNK2090.SchoolDiv",
  enc: "GENEFUNK2090.SchoolEnc",
  evo: "GENEFUNK2090.SchoolEvo",
  ill: "GENEFUNK2090.SchoolIll",
  nec: "GENEFUNK2090.SchoolNec",
  trs: "GENEFUNK2090.SchoolTrs"
};
preLocalize("spellSchools", { sort: true });

/* -------------------------------------------- */

/**
 * Spell scroll item ID within the `GENEFUNK2090.sourcePacks` compendium for each level.
 * @enum {string}
 */
GENEFUNK2090.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/* -------------------------------------------- */
/*  Weapon Details                              */
/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
GENEFUNK2090.weaponTypes = {
  simpleM: "GENEFUNK2090.WeaponSimpleM",
  simpleR: "GENEFUNK2090.WeaponSimpleR",
  martialM: "GENEFUNK2090.WeaponMartialM",
  martialR: "GENEFUNK2090.WeaponMartialR",
  natural: "GENEFUNK2090.WeaponNatural",
  improv: "GENEFUNK2090.WeaponImprov",
  siege: "GENEFUNK2090.WeaponSiege"
};
preLocalize("weaponTypes");

/* -------------------------------------------- */

/**
 * A subset of weapon properties that determine the physical characteristics of the weapon.
 * These properties are used for determining physical resistance bypasses.
 * @enum {string}
 */
GENEFUNK2090.physicalWeaponProperties = {
  ada: "GENEFUNK2090.WeaponPropertiesAda",
  mgc: "GENEFUNK2090.WeaponPropertiesMgc",
  sil: "GENEFUNK2090.WeaponPropertiesSil"
};
preLocalize("physicalWeaponProperties", { sort: true });

/* -------------------------------------------- */

/**
 * The set of weapon property flags which can exist on a weapon.
 * @enum {string}
 */
GENEFUNK2090.weaponProperties = {
  ...GENEFUNK2090.physicalWeaponProperties,
  amm: "GENEFUNK2090.WeaponPropertiesAmm",
  fin: "GENEFUNK2090.WeaponPropertiesFin",
  fir: "GENEFUNK2090.WeaponPropertiesFir",
  foc: "GENEFUNK2090.WeaponPropertiesFoc",
  hvy: "GENEFUNK2090.WeaponPropertiesHvy",
  lgt: "GENEFUNK2090.WeaponPropertiesLgt",
  lod: "GENEFUNK2090.WeaponPropertiesLod",
  rch: "GENEFUNK2090.WeaponPropertiesRch",
  rel: "GENEFUNK2090.WeaponPropertiesRel",
  ret: "GENEFUNK2090.WeaponPropertiesRet",
  spc: "GENEFUNK2090.WeaponPropertiesSpc",
  thr: "GENEFUNK2090.WeaponPropertiesThr",
  two: "GENEFUNK2090.WeaponPropertiesTwo",
  ver: "GENEFUNK2090.WeaponPropertiesVer"
};
preLocalize("weaponProperties", { sort: true });

/* -------------------------------------------- */

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
GENEFUNK2090.sourcePacks = {
  ITEMS: "genefunk2090.items"
};

/* -------------------------------------------- */

/**
 * Settings to configure how actors are merged when polymorphing is applied.
 * @enum {string}
 */
GENEFUNK2090.polymorphSettings = {
  keepPhysical: "GENEFUNK2090.PolymorphKeepPhysical",
  keepMental: "GENEFUNK2090.PolymorphKeepMental",
  keepSaves: "GENEFUNK2090.PolymorphKeepSaves",
  keepSkills: "GENEFUNK2090.PolymorphKeepSkills",
  mergeSaves: "GENEFUNK2090.PolymorphMergeSaves",
  mergeSkills: "GENEFUNK2090.PolymorphMergeSkills",
  keepClass: "GENEFUNK2090.PolymorphKeepClass",
  keepFeats: "GENEFUNK2090.PolymorphKeepFeats",
  keepSpells: "GENEFUNK2090.PolymorphKeepSpells",
  keepItems: "GENEFUNK2090.PolymorphKeepItems",
  keepBio: "GENEFUNK2090.PolymorphKeepBio",
  keepVision: "GENEFUNK2090.PolymorphKeepVision",
  keepSelf: "GENEFUNK2090.PolymorphKeepSelf"
};
preLocalize("polymorphSettings", { sort: true });

/**
 * Settings to configure how actors are effects are merged when polymorphing is applied.
 * @enum {string}
 */
GENEFUNK2090.polymorphEffectSettings = {
  keepAE: "GENEFUNK2090.PolymorphKeepAE",
  keepOtherOriginAE: "GENEFUNK2090.PolymorphKeepOtherOriginAE",
  keepOriginAE: "GENEFUNK2090.PolymorphKeepOriginAE",
  keepEquipmentAE: "GENEFUNK2090.PolymorphKeepEquipmentAE",
  keepFeatAE: "GENEFUNK2090.PolymorphKeepFeatureAE",
  keepSpellAE: "GENEFUNK2090.PolymorphKeepSpellAE",
  keepClassAE: "GENEFUNK2090.PolymorphKeepClassAE",
  keepBackgroundAE: "GENEFUNK2090.PolymorphKeepBackgroundAE"
};
preLocalize("polymorphEffectSettings", { sort: true });

/**
 * Settings to configure how actors are merged when preset polymorphing is applied.
 * @enum {object}
 */
GENEFUNK2090.transformationPresets = {
  wildshape: {
    icon: '<i class="fas fa-paw"></i>',
    label: "GENEFUNK2090.PolymorphWildShape",
    options: {
      keepBio: true,
      keepClass: true,
      keepMental: true,
      mergeSaves: true,
      mergeSkills: true,
      keepEquipmentAE: false
    }
  },
  polymorph: {
    icon: '<i class="fas fa-pastafarianism"></i>',
    label: "GENEFUNK2090.Polymorph",
    options: {
      keepEquipmentAE: false,
      keepClassAE: false,
      keepFeatAE: false,
      keepBackgroundAE: false
    }
  },
  polymorphSelf: {
    icon: '<i class="fas fa-eye"></i>',
    label: "GENEFUNK2090.PolymorphSelf",
    options: {
      keepSelf: true
    }
  }
};
preLocalize("transformationPresets", { sort: true, keys: ["label"] });

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels.
 * The key for each level represents its proficiency multiplier.
 * @enum {string}
 */
GENEFUNK2090.proficiencyLevels = {
  0: "GENEFUNK2090.NotProficient",
  1: "GENEFUNK2090.Proficient",
  0.5: "GENEFUNK2090.HalfProficient",
  2: "GENEFUNK2090.Expertise"
};
preLocalize("proficiencyLevels");

/* -------------------------------------------- */

/**
 * Weapon and armor item proficiency levels.
 * @enum {string}
 */
GENEFUNK2090.weaponAndArmorProficiencyLevels = {
  0: "GENEFUNK2090.NotProficient",
  1: "GENEFUNK2090.Proficient"
};
preLocalize("weaponAndArmorProficiencyLevels");

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object. In cases where multiple pieces
 * of cover are in play, we take the highest value.
 * @enum {string}
 */
GENEFUNK2090.cover = {
  0: "GENEFUNK2090.None",
  .5: "GENEFUNK2090.CoverHalf",
  .75: "GENEFUNK2090.CoverThreeQuarters",
  1: "GENEFUNK2090.CoverTotal"
};
preLocalize("cover");

/* -------------------------------------------- */

/**
 * A selection of actor attributes that can be tracked on token resource bars.
 * @type {string[]}
 * @deprecated since v10
 */
GENEFUNK2090.trackableAttributes = [
  "attributes.ac.value", "attributes.init.bonus", "attributes.movement", "attributes.senses", "attributes.spelldc",
  "attributes.spellLevel", "details.cr", "details.spellLevel", "details.xp.value", "skills.*.passive",
  "abilities.*.value"
];

/* -------------------------------------------- */

/**
 * A selection of actor and item attributes that are valid targets for item resource consumption.
 * @type {string[]}
 */
GENEFUNK2090.consumableResources = [
  // Configured during init.
];

/* -------------------------------------------- */

/**
 * Conditions that can affect an actor.
 * @enum {string}
 */
GENEFUNK2090.conditionTypes = {
  blinded: "GENEFUNK2090.ConBlinded",
  charmed: "GENEFUNK2090.ConCharmed",
  deafened: "GENEFUNK2090.ConDeafened",
  diseased: "GENEFUNK2090.ConDiseased",
  exhaustion: "GENEFUNK2090.ConExhaustion",
  frightened: "GENEFUNK2090.ConFrightened",
  grappled: "GENEFUNK2090.ConGrappled",
  incapacitated: "GENEFUNK2090.ConIncapacitated",
  invisible: "GENEFUNK2090.ConInvisible",
  paralyzed: "GENEFUNK2090.ConParalyzed",
  petrified: "GENEFUNK2090.ConPetrified",
  poisoned: "GENEFUNK2090.ConPoisoned",
  prone: "GENEFUNK2090.ConProne",
  restrained: "GENEFUNK2090.ConRestrained",
  stunned: "GENEFUNK2090.ConStunned",
  unconscious: "GENEFUNK2090.ConUnconscious"
};
preLocalize("conditionTypes", { sort: true });

/* -------------------------------------------- */
/*  Languages                                   */
/* -------------------------------------------- */

/**
 * Languages a character can learn.
 * @enum {string}
 */
GENEFUNK2090.languages = {
  standard: {
    label: "GENEFUNK2090.LanguagesStandard",
    children: {
      common: "GENEFUNK2090.LanguagesCommon",
      dwarvish: "GENEFUNK2090.LanguagesDwarvish",
      elvish: "GENEFUNK2090.LanguagesElvish",
      giant: "GENEFUNK2090.LanguagesGiant",
      gnomish: "GENEFUNK2090.LanguagesGnomish",
      goblin: "GENEFUNK2090.LanguagesGoblin",
      halfling: "GENEFUNK2090.LanguagesHalfling",
      orc: "GENEFUNK2090.LanguagesOrc"
    }
  },
  exotic: {
    label: "GENEFUNK2090.LanguagesExotic",
    children: {
      aarakocra: "GENEFUNK2090.LanguagesAarakocra",
      abyssal: "GENEFUNK2090.LanguagesAbyssal",
      celestial: "GENEFUNK2090.LanguagesCelestial",
      deep: "GENEFUNK2090.LanguagesDeepSpeech",
      draconic: "GENEFUNK2090.LanguagesDraconic",
      gith: "GENEFUNK2090.LanguagesGith",
      gnoll: "GENEFUNK2090.LanguagesGnoll",
      infernal: "GENEFUNK2090.LanguagesInfernal",
      primordial: {
        label: "GENEFUNK2090.LanguagesPrimordial",
        children: {
          aquan: "GENEFUNK2090.LanguagesAquan",
          auran: "GENEFUNK2090.LanguagesAuran",
          ignan: "GENEFUNK2090.LanguagesIgnan",
          terran: "GENEFUNK2090.LanguagesTerran"
        }
      },
      sylvan: "GENEFUNK2090.LanguagesSylvan",
      undercommon: "GENEFUNK2090.LanguagesUndercommon"
    }
  },
  cant: "GENEFUNK2090.LanguagesThievesCant",
  druidic: "GENEFUNK2090.LanguagesDruidic"
};
preLocalize("languages", { key: "label" });
preLocalize("languages.standard.children", { sort: true });
preLocalize("languages.exotic.children", { key: "label", sort: true });
preLocalize("languages.exotic.children.primordial.children", { sort: true });
patchConfig("languages", "label", { since: "GeneFunk2090 2.4", until: "GeneFunk2090 2.6" });

/* -------------------------------------------- */

/**
 * Maximum allowed character level.
 * @type {number}
 */
GENEFUNK2090.maxLevel = 20;

/**
 * Maximum ability score value allowed by default.
 * @type {number}
 */
GENEFUNK2090.maxAbilityScore = 20;

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
GENEFUNK2090.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
GENEFUNK2090.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * @typedef {object} CharacterFlagConfig
 * @property {string} name
 * @property {string} hint
 * @property {string} section
 * @property {typeof boolean|string|number} type
 * @property {string} placeholder
 * @property {string[]} [abilities]
 * @property {Object<string, string>} [choices]
 * @property {string[]} [skills]
 */

/* -------------------------------------------- */

/**
 * Trait configuration information.
 *
 * @typedef {object} TraitConfiguration
 * @property {object} labels
 * @property {string} labels.title         Localization key for the trait name.
 * @property {string} labels.localization  Prefix for a localization key that can be used to generate various
 *                                         plural variants of the trait type.
 * @property {string} icon                 Path to the icon used to represent this trait.
 * @property {string} [actorKeyPath]       If the trait doesn't directly map to an entry as `traits.[key]`, where is
 *                                         this trait's data stored on the actor?
 * @property {string} [configKey]          If the list of trait options doesn't match the name of the trait, where can
 *                                         the options be found within `CONFIG.GENEFUNK2090`?
 * @property {string} [labelKeyPath]       If config is an enum of objects, where can the label be found?
 * @property {object} [subtypes]           Configuration for traits that take some sort of base item.
 * @property {string} [subtypes.keyPath]   Path to subtype value on base items, should match a category key.
 * @property {string[]} [subtypes.ids]     Key for base item ID objects within `CONFIG.GENEFUNK2090`.
 * @property {object} [children]           Mapping of category key to an object defining its children.
 * @property {boolean} [sortCategories]    Whether top-level categories should be sorted.
 * @property {boolean} [expertise]         Can an actor receive expertise in this trait?
 */

/**
 * Configurable traits on actors.
 * @enum {TraitConfiguration}
 */
GENEFUNK2090.traits = {
  saves: {
    labels: {
      title: "GENEFUNK2090.ClassSaves",
      localization: "GENEFUNK2090.TraitSavesPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-saves.svg",
    actorKeyPath: "system.abilities",
    configKey: "abilities",
    labelKeyPath: "label"
  },
  skills: {
    labels: {
      title: "GENEFUNK2090.Skills",
      localization: "GENEFUNK2090.TraitSkillsPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-skills.svg",
    actorKeyPath: "system.skills",
    labelKeyPath: "label",
    expertise: true
  },
  languages: {
    labels: {
      title: "GENEFUNK2090.Languages",
      localization: "GENEFUNK2090.TraitLanguagesPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-languages.svg"
  },
  armor: {
    labels: {
      title: "GENEFUNK2090.TraitArmorProf",
      localization: "GENEFUNK2090.TraitArmorPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-armor-proficiencies.svg",
    actorKeyPath: "system.traits.armorProf",
    configKey: "armorProficiencies",
    subtypes: { keyPath: "armor.type", ids: ["armorIds", "shieldIds"] }
  },
  weapon: {
    labels: {
      title: "GENEFUNK2090.TraitWeaponProf",
      localization: "GENEFUNK2090.TraitWeaponPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-weapon-proficiencies.svg",
    actorKeyPath: "system.traits.weaponProf",
    configKey: "weaponProficiencies",
    subtypes: { keyPath: "weaponType", ids: ["weaponIds"] }
  },
  tool: {
    labels: {
      title: "GENEFUNK2090.TraitToolProf",
      localization: "GENEFUNK2090.TraitToolPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-tool-proficiencies.svg",
    actorKeyPath: "system.tools",
    configKey: "toolProficiencies",
    subtypes: { keyPath: "toolType", ids: ["toolIds"] },
    children: { vehicle: "vehicleTypes" },
    sortCategories: true,
    expertise: true
  },
  di: {
    labels: {
      title: "GENEFUNK2090.DamImm",
      localization: "GENEFUNK2090.TraitDIPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-damage-immunities.svg",
    configKey: "damageTypes"
  },
  dr: {
    labels: {
      title: "GENEFUNK2090.DamRes",
      localization: "GENEFUNK2090.TraitDRPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-damage-resistances.svg",
    configKey: "damageTypes"
  },
  dv: {
    labels: {
      title: "GENEFUNK2090.DamVuln",
      localization: "GENEFUNK2090.TraitDVPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-damage-vulnerabilities.svg",
    configKey: "damageTypes"
  },
  ci: {
    labels: {
      title: "GENEFUNK2090.ConImm",
      localization: "GENEFUNK2090.TraitCIPlural"
    },
    icon: "systems/genefunk2090/icons/svg/trait-condition-immunities.svg",
    configKey: "conditionTypes"
  }
};
preLocalize("traits", { key: "labels.title" });

/* -------------------------------------------- */

/**
 * Modes used within a trait advancement.
 * @enum {object}
 */
GENEFUNK2090.traitModes = {
  default: {
    label: "GENEFUNK2090.AdvancementTraitModeDefaultLabel",
    hint: "GENEFUNK2090.AdvancementTraitModeDefaultHint"
  },
  expertise: {
    label: "GENEFUNK2090.AdvancementTraitModeExpertiseLabel",
    hint: "GENEFUNK2090.AdvancementTraitModeExpertiseHint"
  },
  forcedExpertise: {
    label: "GENEFUNK2090.AdvancementTraitModeForceLabel",
    hint: "GENEFUNK2090.AdvancementTraitModeForceHint"
  },
  upgrade: {
    label: "GENEFUNK2090.AdvancementTraitModeUpgradeLabel",
    hint: "GENEFUNK2090.AdvancementTraitModeUpgradeHint"
  }
};
preLocalize("traitModes", { keys: ["label", "hint"] });

/* -------------------------------------------- */

/**
 * Special character flags.
 * @enum {CharacterFlagConfig}
 */
GENEFUNK2090.characterFlags = {
  diamondSoul: {
    name: "GENEFUNK2090.FlagsDiamondSoul",
    hint: "GENEFUNK2090.FlagsDiamondSoulHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  elvenAccuracy: {
    name: "GENEFUNK2090.FlagsElvenAccuracy",
    hint: "GENEFUNK2090.FlagsElvenAccuracyHint",
    section: "GENEFUNK2090.RacialTraits",
    abilities: ["dex", "int", "wis", "cha"],
    type: Boolean
  },
  halflingLucky: {
    name: "GENEFUNK2090.FlagsHalflingLucky",
    hint: "GENEFUNK2090.FlagsHalflingLuckyHint",
    section: "GENEFUNK2090.RacialTraits",
    type: Boolean
  },
  initiativeAdv: {
    name: "GENEFUNK2090.FlagsInitiativeAdv",
    hint: "GENEFUNK2090.FlagsInitiativeAdvHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  initiativeAlert: {
    name: "GENEFUNK2090.FlagsAlert",
    hint: "GENEFUNK2090.FlagsAlertHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  jackOfAllTrades: {
    name: "GENEFUNK2090.FlagsJOAT",
    hint: "GENEFUNK2090.FlagsJOATHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  observantFeat: {
    name: "GENEFUNK2090.FlagsObservant",
    hint: "GENEFUNK2090.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  tavernBrawlerFeat: {
    name: "GENEFUNK2090.FlagsTavernBrawler",
    hint: "GENEFUNK2090.FlagsTavernBrawlerHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  powerfulBuild: {
    name: "GENEFUNK2090.FlagsPowerfulBuild",
    hint: "GENEFUNK2090.FlagsPowerfulBuildHint",
    section: "GENEFUNK2090.RacialTraits",
    type: Boolean
  },
  reliableTalent: {
    name: "GENEFUNK2090.FlagsReliableTalent",
    hint: "GENEFUNK2090.FlagsReliableTalentHint",
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  remarkableAthlete: {
    name: "GENEFUNK2090.FlagsRemarkableAthlete",
    hint: "GENEFUNK2090.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "GENEFUNK2090.Feats",
    type: Boolean
  },
  weaponCriticalThreshold: {
    name: "GENEFUNK2090.FlagsWeaponCritThreshold",
    hint: "GENEFUNK2090.FlagsWeaponCritThresholdHint",
    section: "GENEFUNK2090.Feats",
    type: Number,
    placeholder: 20
  },
  spellCriticalThreshold: {
    name: "GENEFUNK2090.FlagsSpellCritThreshold",
    hint: "GENEFUNK2090.FlagsSpellCritThresholdHint",
    section: "GENEFUNK2090.Feats",
    type: Number,
    placeholder: 20
  },
  meleeCriticalDamageDice: {
    name: "GENEFUNK2090.FlagsMeleeCriticalDice",
    hint: "GENEFUNK2090.FlagsMeleeCriticalDiceHint",
    section: "GENEFUNK2090.Feats",
    type: Number,
    placeholder: 0
  }
};
preLocalize("characterFlags", { keys: ["name", "hint", "section"] });

/**
 * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
 * @type {string[]}
 */
GENEFUNK2090.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(GENEFUNK2090.characterFlags));

/* -------------------------------------------- */

/**
 * Advancement types that can be added to items.
 * @enum {*}
 */
GENEFUNK2090.advancementTypes = {
  AbilityScoreImprovement: advancement.AbilityScoreImprovementAdvancement,
  HitPoints: advancement.HitPointsAdvancement,
  ItemChoice: advancement.ItemChoiceAdvancement,
  ItemGrant: advancement.ItemGrantAdvancement,
  ScaleValue: advancement.ScaleValueAdvancement,
  Size: advancement.SizeAdvancement,
  Trait: advancement.TraitAdvancement
};

/* -------------------------------------------- */
/*  Sources                                     */
/* -------------------------------------------- */

/**
 * List of books available as sources.
 * @enum {string}
 */
GENEFUNK2090.sourceBooks = {
  "SRD 5.1": "SOURCE.BOOK.SRD"
};
preLocalize("sourceBooks", { sort: true });

/* -------------------------------------------- */
/*  Enrichment                                  */
/* -------------------------------------------- */

let _enrichmentLookup;
Object.defineProperty(GENEFUNK2090, "enrichmentLookup", {
  get() {
    if ( !_enrichmentLookup ) {
      _enrichmentLookup = {
        abilities: foundry.utils.deepClone(GENEFUNK2090.abilities),
        skills: foundry.utils.deepClone(GENEFUNK2090.skills),
        tools: foundry.utils.deepClone(GENEFUNK2090.toolIds)
      };
      Object.values(GENEFUNK2090.abilities).forEach(a => _enrichmentLookup.abilities[a.fullKey] = a);
      Object.values(GENEFUNK2090.skills).forEach(s => _enrichmentLookup.skills[s.fullKey] = s);
    }
    return _enrichmentLookup;
  },
  enumerable: true
});

/* -------------------------------------------- */

/**
 * Patch an existing config enum to allow conversion from string values to object values without
 * breaking existing modules that are expecting strings.
 * @param {string} key          Key within GENEFUNK2090 that has been replaced with an enum of objects.
 * @param {string} fallbackKey  Key within the new config object from which to get the fallback value.
 * @param {object} [options]    Additional options passed through to logCompatibilityWarning.
 */
function patchConfig(key, fallbackKey, options) {
  /** @override */
  function toString() {
    const message = `The value of CONFIG.GENEFUNK2090.${key} has been changed to an object.`
      +` The former value can be acccessed from .${fallbackKey}.`;
    foundry.utils.logCompatibilityWarning(message, options);
    return this[fallbackKey];
  }

  Object.values(GENEFUNK2090[key]).forEach(o => {
    if ( foundry.utils.getType(o) !== "Object" ) return;
    o.toString = toString;
  });
}

/* -------------------------------------------- */

export default GENEFUNK2090;
