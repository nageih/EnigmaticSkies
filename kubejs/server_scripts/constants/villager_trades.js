//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.
const villagerTrades = {
    'minecraft:farmer': [
        {
            result: { id: 'minecraft:potato', count: 1 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 8, max: 8 } }],
            level: 1,
            maxUses: 2
        },
        {
            result: { id: 'minecraft:carrot', count: 1 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 8, max: 8 } }],
            level: 1,
            maxUses: 2
        },
        {
            result: { id: 'farmersdelight:onion', count: 1 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 2
        },
        {
            result: { id: 'farmersdelight:rice', count: 1 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 2
        },
        {
            result: { id: 'farmersdelight:organic_compost', count: 2 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'actuallyadditions:worm', count: 8 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        }
    ],
    'minecraft:fisherman': [
        {
            result: { id: 'aquaculture:goldfish', count: 9 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:jellyfish', count: 9 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:red_shrooma', count: 9 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 9 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:cod', count: 9 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:salmon', count: 9 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:pufferfish', count: 9 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 3
        },
        {
            result: { id: 'sushigocrafting:raw_tuna', count: 9 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 4
        },
        {
            result: { id: 'sushigocrafting:shrimp[sushigocrafting:amount=100]', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 2, max: 4 } }],
            level: 4
        }
        // level 5 is all aquaculture fish
    ],
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 1,
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 8, max: 8 } }],
            level: 1,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:moa_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }],
            level: 3,
            maxUses: 4
        }
    ],
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [{ id: 'farmersdelight:dumplings', count: { min: 4, max: 8 } }],
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
            ingredients: [{ id: 'enigmatica:poutine', count: { min: 8, max: 12 } }],
            level: 3
        },
        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [{ id: 'arsdelight:honey_glazed_chimera', count: { min: 12, max: 16 } }],
            level: 5
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
        result: { id: fish, count: 9 },
        ingredients: [{ id: 'farmersdelight:shepherds_pie_block', count: { min: 1, max: 1 } }],
        level: 5
    });
});
