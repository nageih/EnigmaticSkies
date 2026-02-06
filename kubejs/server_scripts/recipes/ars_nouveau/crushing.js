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
            input: { item: 'minecraft:ice' },
            output: [{ stack: { id: 'minecraft:snow_block', count: 1 }, chance: 1.0, maxRange: 1 }],
            id: `${id_prefix}snow_block`
        },
        {
            input: { item: 'minecraft:mud' },
            output: [{ stack: { id: 'minecraft:packed_mud', count: 1 }, chance: 1.0, maxRange: 1 }],
            id: `${id_prefix}packed_mud`
        },
        {
            input: { item: 'aether:holystone' },
            output: [
                { stack: { id: 'aether:ambrosium_shard', count: 1 }, chance: 0.5, maxRange: 3 },
                { stack: { id: 'enigmatica:andesite_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'enigmatica:diorite_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'ae2:sky_dust', count: 1 }, chance: 0.5, maxRange: 4 }
            ],
            id: `${id_prefix}holystone_crushing`
        },
        {
            input: { item: 'minecraft:moss_block' },
            output: [
                { stack: { id: 'oritech:small_copper_clump', count: 1 }, chance: 0.5, maxRange: 3 },
                { stack: { id: 'enigmatica:stone_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'enigmatica:granite_pebble', count: 1 }, chance: 0.5, maxRange: 4 },
                { stack: { id: 'enigmatica:calcite_pebble', count: 1 }, chance: 0.5, maxRange: 4 }
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
    });
});
