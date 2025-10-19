//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.

const villagerTrades = {
    // Smithing Table
    'minecraft:toolsmith': [
        {
            result: { id: 'minecraft:brewing_stand', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:barrel', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'minecraft:composter', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:loom', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'ars_nouveau:arcane_core', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:smoker', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:cauldron', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:grindstone', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'minecraft:blast_furnace', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:stonecutter', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Composter
    'minecraft:farmer': [
        {
            result: { id: 'farmersdelight:organic_compost', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'actuallyadditions:feeder', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'actuallyadditions:worm', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:mycelial_sourcelink', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'pneumaticcraft:crop_support', count: 4 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'actuallyadditions:greenhouse_glass', count: 2 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 2, max: 4 } }],
            level: 3
        },

        {
            result: { id: 'ars_nouveau:ritual_overgrowth', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 2, max: 4 } }],
            level: 4
        },
        {
            result: { id: 'ars_nouveau:ritual_fertility', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 2, max: 4 } }],
            level: 4
        }
    ],
    // Barrel
    'minecraft:fisherman': [
        {
            result: { id: 'minecraft:dried_kelp', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 1
        },

        {
            result: { id: 'aquaculture:red_shrooma', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:goldfish', count: 8 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'minecraft:cod', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:salmon', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:pufferfish', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'sushigocrafting:raw_tuna', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'sushigocrafting:shrimp[sushigocrafting:amount=100]', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Loom
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'enigmatica:chicken_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'enigmatica:aerbunny_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'enigmatica:moa_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'enigmatica:goat_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        }
    ],
    // Arcane Core
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_nouveau:enchanting_apparatus', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'ars_nouveau:alakarkinos_token', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:starbuncle_shards', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'ars_nouveau:wixie_shards', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'ars_nouveau:amethyst_golem_charm', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 3
        }
    ],
    // Stonecutter
    'minecraft:mason': [
        {
            result: { id: 'pneumaticcraft:reinforced_stone', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: `cold_sweat:hearth`, count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 1
        }
    ],
    // Butcher
    'minecraft:butcher': [
        {
            result: {
                id: 'occultism:butcher_knife[enchantments={levels:{"minecraft:looting":1,"minecraft:sharpness":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 1
        }
    ],
    // Coffee Maker
    'actuallyadditions:engineer': [
        {
            result: { id: 'actuallyadditions:basic_coil', count: 4 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'create:precision_mechanism', count: 4 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'modern_industrialization:analog_circuit', count: 4 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'modern_industrialization:copper_cable', count: 8 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 2
        }
    ],
    // Forge Hammer
    'modern_industrialization:industrialist': [
        {
            result: { id: 'prettypipes:pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ppfluids:fluid_pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'prettypipes:blank_module', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'modern_industrialization:config_card', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'extended_industrialization:machine_config_card', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        }
    ],
    // Brewing Stand
    'minecraft:cleric': [
        {
            result: { id: 'ars_nouveau:ritual_brazier', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'occultism:fragile_soul_gem', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'utilitarian:angel_block', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 2
        }
    ],
    // Lectern
    'minecraft:librarian': [
        {
            result: { id: 'ars_nouveau:bookwyrm_charm', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:storage_lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'ars_nouveau:repository_controller', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:repository', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'ars_additions:lost_codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'enigmatica:antikythera_mechanism', count: 4 },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Grindstone
    'minecraft:weaponsmith': [
        {
            result: { id: 'naturesaura:break_prevention', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: {
                id: 'aether:candy_cane_sword[enchantments={levels:{"apothic_enchanting:scavenger":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: {
                id: 'aether:zanite_sword[enchantments={levels:{"minecraft:looting":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: {
                id: 'aether:zanite_axe[enchantments={levels:{"minecraft:looting":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: {
                id: 'aether:vampire_blade[enchantments={levels:{"minecraft:mending":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: {
                id: 'aether:flaming_sword[enchantments={levels:{"minecraft:sweeping_edge":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: {
                id: 'aether:holy_sword[enchantments={levels:{"apothic_enchanting:knowledge_of_the_ages":1,"ars_elemental:soulbound":1,"minecraft:smite":3,"minecraft:unbreaking":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: {
                id: 'aether:valkyrie_lance[enchantments={levels:{"ars_elemental:soulbound":1,"minecraft:sharpness":3,"minecraft:unbreaking":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        }
    ],
    // Blast Furnace
    'minecraft:armorer': [
        {
            result: { id: 'minecraft:host_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:wayfinder_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:shaper_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:raiser_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:dune_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'minecraft:sentry_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:vex_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:wild_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:coast_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'minecraft:tide_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:bolt_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:rib_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:snout_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:silence_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:ward_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:flow_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:spire_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'minecraft:eye_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:netherite_upgrade_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // AE2 Charger
    'ae2:fluix_researcher': [
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:logic_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 1
        },
        {
            result: { id: 'ae2:blank_pattern', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:calculation_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:engineering_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 2
        }
    ],
    // PNC Charging Station
    'pneumaticcraft:mechanic': [
        {
            result: { id: 'pneumaticcraft:reinforced_pressure_tube', count: 8 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'pneumaticcraft:module_expansion_card', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'pneumaticcraft:collector_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'pneumaticcraft:harvesting_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'pneumaticcraft:guard_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'pneumaticcraft:logistics_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'pneumaticcraft:drone', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'pneumaticcraft:programming_puzzle', count: 16 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'pneumaticcraft:assembly_program_drill_laser', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 8, max: 12 } }],
            level: 5
        }
    ]
};

// const aquacultureFish = [
//     'aquaculture:atlantic_cod',
//     'aquaculture:blackfish',
//     'aquaculture:pacific_halibut',
//     'aquaculture:atlantic_halibut',
//     'aquaculture:atlantic_herring',
//     'aquaculture:pink_salmon',
//     'aquaculture:pollock',
//     'aquaculture:rainbow_trout',
//     'aquaculture:bayad',
//     'aquaculture:boulti',
//     'aquaculture:capitaine',
//     'aquaculture:synodontis',
//     'aquaculture:smallmouth_bass',
//     'aquaculture:bluegill',
//     'aquaculture:brown_trout',
//     'aquaculture:carp',
//     'aquaculture:catfish',
//     'aquaculture:gar',
//     'aquaculture:muskellunge',
//     'aquaculture:tuna',
//     'aquaculture:red_grouper',
//     'aquaculture:tambaqui',
//     'aquaculture:piranha',
//     'aquaculture:arapaima',
//     'aquaculture:perch'
// ];

// aquacultureFish.forEach((fish) => {
//     villagerTrades['minecraft:fisherman'].push({
//         result: { id: fish, count: 4 },
//         ingredients: [{ id: 'farmersdelight:shepherds_pie_block', count: { min: 1, max: 1 } }],
//         level: 5
//     });
// });
