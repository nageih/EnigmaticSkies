//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.
const villagerTrades = {
    // Composter
    'minecraft:farmer': [
        {
            result: { id: 'farmersdelight:organic_compost', count: 2 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'actuallyadditions:worm', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        }
    ],
    // Barrel
    'minecraft:fisherman': [
        {
            result: { id: 'aquaculture:goldfish', count: 4 },
            ingredients: [{ id: 'enigmatica:bottomless_breadsticks', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:jellyfish', count: 1 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:red_shrooma', count: 4 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 4 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 1, max: 1 } }],
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
        // level 5 is all aquaculture fish
    ],
    // Loom
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [
                { id: 'enigmatica:bottomless_breadsticks', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 1,
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [
                { id: 'enigmatica:bottomless_breadsticks', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 1,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [
                { id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 2,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [
                { id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 2,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:moa_iou', count: 1 },
            ingredients: [
                { id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 3,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:aerbunny_iou', count: 1 },
            ingredients: [
                { id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } },
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } }
            ],
            level: 3,
            maxUses: 4
        }
    ],
    // Arcane Core
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [
                { id: 'farmersdelight:dumplings', count: { min: 4, max: 8 } },
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } }
            ],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:starbuncle_shards', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:wixie_shards', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:alakarkinos_token', count: 1 },
            ingredients: [{ id: 'arsdelight:mendosteen_pie', count: { min: 4, max: 8 } }],
            level: 2
        },
        {
            result: { id: 'ars_additions:lost_codex_entry', count: 1 },
            ingredients: [
                { id: 'enigmatica:poutine', count: { min: 8, max: 12 } },
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } }
            ],
            level: 3
        },
        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [
                { id: 'arsdelight:honey_glazed_chimera', count: { min: 12, max: 16 } },
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } }
            ],
            level: 5
        }
    ],
    // Stonecutter
    'minecraft:mason': [
        {
            result: { id: 'modern_industrialization:fire_clay_brick', count: 16 },
            ingredients: [
                { id: 'farmersdelight:hamburger', count: { min: 1, max: 2 } },
                { id: 'minecraft:clay', count: { min: 4, max: 6 } }
            ],
            level: 1
        },
        {
            result: { id: 'minecraft:brick', count: 16 },
            ingredients: [
                { id: 'farmersdelight:hamburger', count: { min: 1, max: 2 } },
                { id: 'minecraft:clay', count: { min: 4, max: 6 } }
            ],
            level: 1
        },
        {
            result: { id: 'pneumaticcraft:reinforced_stone', count: 4 },
            ingredients: [
                { id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 2 } },
                { id: 'pneumaticcraft:ingot_iron_compressed', count: { min: 1, max: 1 } }
            ],
            level: 2
        }
    ],
    // Coffee Maker
    'actuallyadditions:engineer': [
        {
            result: { id: 'actuallyadditions:basic_coil', count: 4 },
            ingredients: [
                { id: 'actuallyadditions:coffee_cup', count: { min: 1, max: 1 } },
                { id: 'actuallyadditions:enori_crystal', count: { min: 3, max: 6 } }
            ],
            level: 1
        }
    ],
    // Forge Hammer
    'modern_industrialization:industrialist': [
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"modern_industrialization:analog_circuit"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'arsdelight:honey_glazed_chimera', count: { min: 24, max: 32 } }],
            level: 1
        }
    ],
    // Brewing Stand
    'minecraft:cleric': [
        {
            result: { id: 'utilitarian:angel_block', count: 1 },
            ingredients: [
                { id: 'farmersdelight:mutton_wrap', count: { min: 2, max: 4 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:ritual_awakening', count: 1 },
            ingredients: [
                { id: 'farmersdelight:mutton_wrap', count: { min: 1, max: 1 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:ritual_restoration', count: 1 },
            ingredients: [
                { id: 'enigmatica:dumpling_drop', count: { min: 1, max: 1 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:ritual_flight', count: 1 },
            ingredients: [
                { id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:ritual_sunrise', count: 1 },
            ingredients: [
                { id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 3
        },
        {
            result: { id: 'ars_nouveau:ritual_moonfall', count: 1 },
            ingredients: [
                { id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } },
                { id: 'minecraft:gold_ingot', count: { min: 2, max: 8 } }
            ],
            level: 3
        }
    ]
};

const aquacultureFish = [
    'aquaculture:atlantic_cod',
    'aquaculture:blackfish',
    'aquaculture:pacific_halibut',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:pink_salmon',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:bayad',
    'aquaculture:boulti',
    'aquaculture:capitaine',
    'aquaculture:synodontis',
    'aquaculture:smallmouth_bass',
    'aquaculture:bluegill',
    'aquaculture:brown_trout',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:muskellunge',
    'aquaculture:tuna',
    'aquaculture:red_grouper',
    'aquaculture:tambaqui',
    'aquaculture:piranha',
    'aquaculture:arapaima',
    'aquaculture:perch'
];

aquacultureFish.forEach((fish) => {
    villagerTrades['minecraft:fisherman'].push({
        result: { id: fish, count: 4 },
        ingredients: [{ id: 'farmersdelight:shepherds_pie_block', count: { min: 1, max: 1 } }],
        level: 5
    });
});
