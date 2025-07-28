ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/placement_conversion/';

    const recipes = [
        {
            ingredient: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'true' } },
            result: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}the_bumblezone_super_candle_base`
        },
        {
            ingredient: { block: 'occultism:large_candle', properties: { lit: 'true' } },
            result: { block: 'occultism:large_candle', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}occultism_large_candle`
        },
        {
            ingredient: { block: 'supplementaries:candle_holder', properties: { lit: 'true' } },
            result: { block: 'supplementaries:candle_holder', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}supplementaries_candle_holder`
        }
    ];

    // Ars Nouveau Conjure Terrain modifications
    const terrain_blocks = {
        '#aether:ultracold': [
            { in: 'minecraft:cobblestone', out: 'aether:icestone' },
            { in: 'minecraft:stone', out: 'aether:holystone' },
            { in: 'minecraft:cobbled_deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' }
        ],
        'minecraft:mangrove_swamp': [
            { in: 'minecraft:cobblestone', out: 'minecraft:tuff' },
            { in: 'minecraft:stone', out: 'minecraft:polished_tuff' },
            { in: 'minecraft:cobbled_deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:dirt', out: 'minecraft:mud' }
        ],
        'ars_nouveau:archwood_forest': [
            { in: 'minecraft:cobblestone', out: 'minecraft:blackstone' },
            { in: 'minecraft:stone', out: 'minecraft:polished_blackstone' },
            { in: 'minecraft:cobbled_deepslate', out: 'minecraft:basalt' },
            { in: 'minecraft:deepslate', out: 'minecraft:smooth_basalt' },
            { in: 'minecraft:sand', out: 'createsifter:dust' },
            { in: 'minecraft:sandstone', out: 'createsifter:dust' },
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' }
        ]
    };

    Object.keys(terrain_blocks).forEach((biome) => {
        terrain_blocks[biome].forEach((block) => {
            recipes.push({
                ingredient: { block: block.in },
                result: { block: block.out },
                biome: biome,
                id: `${id_prefix}${biome.split(':')[1]}/${block.in.replace(':', '_')}_to_${block.out.replace(':', '_')}`
            });
        });
    });

    const materials = ['golden', 'copper', 'iron'];
    const mcw_types = ['low_candle', 'candle', 'wall_candle', 'double_candle', 'triple_candle'];

    materials.forEach((material) => {
        mcw_types.forEach((type) => {
            recipes.push({
                ingredient: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'true' } },
                result: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}mcwlights_${material}_${type}_holder`
            });
        });
    });

    colors.forEach((color) => {
        recipes.push(
            {
                ingredient: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'true' } },
                result: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}supplementaries_candle_holder_${color}`
            },
            {
                ingredient: { block: `occultism:large_candle_${color}`, properties: { lit: 'true' } },
                result: { block: `occultism:large_candle_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}occultism_large_candle_${color}`
            },
            {
                ingredient: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'true' } },
                result: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}the_bumblezone_super_candle_base_${color}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'aether:placement_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
