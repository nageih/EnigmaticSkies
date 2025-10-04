ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/crush/';

    const recipes = [
        {
            input: { item: 'minecraft:wheat' },
            output: [
                { stack: { id: 'create:wheat_flour', count: 2 }, chance: 1.0, maxRange: 1 },
                { stack: { id: 'create:wheat_flour', count: 1 }, chance: 0.5, maxRange: 1 }
            ],
            id: `${id_prefix}wheat_flour_from_wheat`
        },

        {
            input: { item: 'minecraft:ink_sac' },
            output: [{ stack: { id: 'minecraft:black_dye', count: 2 }, chance: 1.0, maxRange: 1 }],
            id: `${id_prefix}black_dye`
        },
        {
            input: { tag: 'c:ores/netherite_scrap' },
            output: [
                { stack: { id: 'minecraft:netherite_scrap', count: 2 }, chance: 1.0, maxRange: 1 },
                { stack: { id: 'minecraft:netherite_scrap', count: 1 }, chance: 0.1, maxRange: 1 }
            ],
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: { item: 'minecraft:ice' },
            output: [{ stack: { id: 'minecraft:snow_block', count: 1 }, chance: 1.0, maxRange: 1 }],
            id: `${id_prefix}snow_block`
        },
        {
            input: { item: 'aether:holystone' },
            output: [
                { stack: { id: 'aether:ambrosium_shard', count: 1 }, chance: 0.25, maxRange: 1 },
                { stack: { id: 'createsifter:andesite_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'createsifter:diorite_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'createsifter:granite_pebble', count: 1 }, chance: 0.5, maxRange: 4 }
            ],
            id: `${id_prefix}holystone_crushing`
        },
        {
            input: { item: 'minecraft:moss_block' },
            output: [
                { stack: { id: 'createsifter:raw_copper_piece', count: 1 }, chance: 0.25, maxRange: 1 },
                { stack: { id: 'createsifter:stone_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'createsifter:tuff_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'createsifter:calcite_pebble', count: 1 }, chance: 0.5, maxRange: 4 }
            ],
            id: `${id_prefix}moss_block_crushing`
        },
        {
            input: { item: 'minecraft:raw_gold_block' },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 18 },
                    chance: 1.0,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 9 },
                    chance: 0.3,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 9 },
                    chance: 0.15,
                    maxRange: 1
                },
                { stack: { id: 'malum:raw_brilliance', count: 9 }, chance: 0.05, maxRange: 1 }
            ],
            id: `${id_prefix}raw_gold_block_crushing`
        },
        {
            input: { item: 'minecraft:raw_iron_block' },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 18 },
                    chance: 1.0,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 9 },
                    chance: 0.3,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 9 },
                    chance: 0.15,
                    maxRange: 1
                },
                { stack: { id: 'malum:raw_brilliance', count: 9 }, chance: 0.05, maxRange: 1 }
            ],
            id: `${id_prefix}raw_iron_block_crushing`
        },
        {
            input: { item: 'minecraft:raw_copper_block' },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 18 },
                    chance: 1.0,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 9 },
                    chance: 0.3,
                    maxRange: 1
                },
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 9 },
                    chance: 0.15,
                    maxRange: 1
                },
                { stack: { id: 'malum:raw_brilliance', count: 9 }, chance: 0.05, maxRange: 1 }
            ],
            id: `${id_prefix}raw_copper_block_crushing`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            input: { item: `minecraft:${color}_wool` },
            output: [
                { stack: { id: 'minecraft:string', count: 2 }, chance: 1.0, maxRange: 2 },
                { stack: { id: `minecraft:${color}_dye`, count: 1 }, chance: 0.5, maxRange: 1 }
            ],
            id: `${id_prefix}${color}_dye_from_wool`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
