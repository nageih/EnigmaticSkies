//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.
const villagerTrades = {
    // Smithing Table
    'minecraft:toolsmith': [
        {
            result: { id: 'minecraft:composter', count: 1 },
            ingredients: [{ id: 'enigmatica:bottomless_breadsticks', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:loom', count: 1 },
            ingredients: [{ id: 'enigmatica:bottomless_breadsticks', count: { min: 2, max: 4 } }],
            level: 1
        },

        {
            result: { id: 'minecraft:lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:brewing_stand', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 2
        },

        // {
        //     result: { id: 'minecraft:furnace', count: 1 },
        //     ingredients: [{ id: 'farmersdelight:bacon_sandwich', count: { min: 2, max: 4 } }],
        //     level: 3
        // },
        {
            result: { id: 'minecraft:smoker', count: 1 },
            ingredients: [{ id: 'farmersdelight:bacon_sandwich', count: { min: 2, max: 4 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:cauldron', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:grindstone', count: 1 },
            ingredients: [{ id: 'farmersdelight:bacon_sandwich', count: { min: 2, max: 4 } }],
            level: 4
        },

        {
            result: { id: 'minecraft:blast_furnace', count: 1 },
            ingredients: [{ id: 'farmersdelight:mutton_wrap', count: { min: 2, max: 4 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:stonecutter', count: 1 },
            ingredients: [{ id: 'farmersdelight:mutton_wrap', count: { min: 2, max: 4 } }],
            level: 5
        }
    ],
    // Composter
    'minecraft:farmer': [
        {
            result: { id: 'farmersdelight:organic_compost', count: 2 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:agronomic_sourcelink', count: 2 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'actuallyadditions:worm', count: 2 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'pneumaticcraft:crop_support', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'actuallyadditions:greenhouse_glass', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 3
        }
    ],
    // Barrel
    'minecraft:fisherman': [
        {
            result: { id: 'aquaculture:goldfish', count: 8 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:jellyfish', count: 8 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:red_shrooma', count: 8 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 8 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:cod', count: 4 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:salmon', count: 4 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:pufferfish', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'sushigocrafting:raw_tuna', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'sushigocrafting:shrimp[sushigocrafting:amount=100]', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        }
    ],
    // Loom
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [{ id: 'enigmatica:bottomless_breadsticks', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bottomless_breadsticks', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'enigmatica:chicken_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'enigmatica:aerbunny_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'enigmatica:moa_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 2, max: 4 } }],
            level: 4
        }
    ],
    // Arcane Core
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_nouveau:enchanting_apparatus', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 4, max: 8 } }],
            level: 1
        },
        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 4, max: 8 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:starbuncle_shards', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:wixie_shards', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:alakarkinos_token', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 3
        },
        {
            result: { id: 'ars_nouveau:amethyst_golem_charm', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'ars_additions:lost_codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 8, max: 12 } }],
            level: 4
        },
        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [{ id: 'arsdelight:honey_glazed_chimera', count: { min: 12, max: 16 } }],
            level: 5
        }
    ],
    // Stonecutter
    'minecraft:mason': [
        {
            result: { id: 'pneumaticcraft:reinforced_stone', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 2 } }],
            level: 1
        }
    ],
    // Coffee Maker
    'actuallyadditions:engineer': [
        {
            result: { id: 'actuallyadditions:basic_coil', count: 4 },
            ingredients: [{ id: 'actuallyadditions:coffee_cup', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'create:precision_mechanism', count: 4 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 2 } }],
            level: 1
        },
        {
            result: { id: 'modern_industrialization:analog_circuit', count: 4 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 2 } }],
            level: 2
        },
        {
            result: { id: 'modern_industrialization:copper_cable', count: 8 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 2 } }],
            level: 2
        },
        {
            result: { id: 'modern_industrialization:cupronickel_cable', count: 8 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 2 } }],
            level: 3
        }
    ],
    // Forge Hammer
    'modern_industrialization:industrialist': [
        {
            result: { id: 'prettypipes:pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 2 } }],
            level: 1
        },
        {
            result: { id: 'ppfluids:fluid_pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 2 } }],
            level: 1
        },
        {
            result: { id: 'prettypipes:blank_module', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 2 } }],
            level: 2
        },
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"modern_industrialization:analog_circuit"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'arsdelight:honey_glazed_chimera', count: { min: 1, max: 8 } }],
            level: 5
        }
    ],
    // Brewing Stand
    'minecraft:cleric': [
        {
            result: { id: 'ars_nouveau:ritual_brazier', count: 1 },
            ingredients: [{ id: 'enigmatica:lily_s_lilac_cotton_candy', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:arcane_core', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 1
        },

        {
            result: { id: 'utilitarian:angel_block', count: 1 },
            ingredients: [{ id: 'enigmatica:lily_s_lilac_cotton_candy', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]', count: 1 },
            ingredients: [{ id: 'enigmatica:lily_s_lilac_cotton_candy', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'malum:rotting_essence', count: 4 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'malum:grim_talc', count: 4 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'malum:astral_weave', count: 4 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 2, max: 4 } }],
            level: 4
        },
        {
            result: { id: 'malum:warp_flux', count: 4 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 2, max: 4 } }],
            level: 4
        }
    ],
    // Lectern
    'minecraft:librarian': [
        {
            result: { id: 'ars_nouveau:bookwyrm_charm', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:storage_lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:repository_controller', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:repository', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 2, max: 4 } }],
            level: 2
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
