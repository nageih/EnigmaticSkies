ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/placement_conversion/';

    const recipes = [
        {
            result: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'false' } },
            ingredient: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'true' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}the_bumblezone_super_candle_base`
        },
        {
            result: { block: 'occultism:large_candle', properties: { lit: 'false' } },
            ingredient: { block: 'occultism:large_candle', properties: { lit: 'true' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}occultism_large_candle`
        },
        {
            result: { block: 'supplementaries:candle_holder', properties: { lit: 'false' } },
            ingredient: { block: 'supplementaries:candle_holder', properties: { lit: 'true' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}supplementaries_candle_holder`
        },
        {
            result: { block: 'supplementaries:end_stone_lamp', properties: { rune: 'e' } },
            ingredient: { block: 'minecraft:end_portal' },
            biome: '#enigmatica:global',
            id: `${id_prefix}minecraft_end_portal`
        },
        {
            result: { block: 'minecraft:crying_obsidian' },
            ingredient: { block: 'minecraft:nether_portal' },
            biome: '#enigmatica:global',
            id: `${id_prefix}minecraft_nether_portal`
        },
        {
            result: { block: 'minecraft:sculk_shrieker', properties: { can_summon: 'true' } },
            ingredient: { block: 'minecraft:sculk_shrieker' },
            biome: 'minecraft:deep_dark',
            id: `${id_prefix}minecraft_sculk_shrieker`
        }
    ];

    // Ars Nouveau Conjure Terrain modifications
    const terrain_blocks = {
        // Default
        '#aether:ultracold': [
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'aether:aether_grass_block' },
            { in: 'minecraft:cobblestone', out: 'aether:icestone' },
            { in: 'minecraft:stone', out: 'aether:holystone' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:cobbled_deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:magma_block', out: 'minecraft:netherrack' }
        ],
        // Flourishing
        'minecraft:mangrove_swamp': [
            { in: 'minecraft:dirt', out: 'minecraft:mud' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'minecraft:mud' },
            { in: 'minecraft:cobblestone', out: 'minecraft:tuff' },
            { in: 'minecraft:stone', out: 'naturesaura:infused_stone' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:cobbled_deepslate', out: 'aether:aerogel' },
            { in: 'minecraft:deepslate', out: 'aether:aerogel' }
        ],
        // Cascading
        'minecraft:warm_ocean': [
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'aether:aether_grass_block' },
            { in: 'minecraft:cobblestone', out: 'minecraft:clay' },
            { in: 'minecraft:stone', out: 'minecraft:terracotta' },
            // { in: 'minecraft:sand', out: 'createsifter:dust' },
            // { in: 'minecraft:sandstone', out: 'createsifter:dust' },
            { in: 'minecraft:cobbled_deepslate', out: 'modern_industrialization:salt_block' },
            { in: 'minecraft:deepslate', out: 'modern_industrialization:salt_block' }
        ],
        // Blazing
        'ars_nouveau:archwood_forest': [
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'aether:aether_grass_block' },
            { in: 'minecraft:cobblestone', out: 'minecraft:blackstone' },
            { in: 'minecraft:stone', out: 'minecraft:polished_blackstone' },
            { in: 'minecraft:sand', out: 'aether:golden_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:cobbled_deepslate', out: 'minecraft:basalt' },
            { in: 'minecraft:deepslate', out: 'minecraft:smooth_basalt' }
        ],
        // Vexing
        'minecraft:mushroom_fields': [
            { in: 'minecraft:dirt', out: 'malum:blighted_earth' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'malum:blighted_earth' },
            { in: 'minecraft:cobblestone', out: 'malum:tainted_rock' },
            { in: 'minecraft:stone', out: 'malum:smooth_tainted_rock' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' },
            { in: 'minecraft:cobbled_deepslate', out: 'malum:twisted_rock' },
            { in: 'minecraft:deepslate', out: 'malum:smooth_twisted_rock' }
        ],
        // Flashing
        'minecraft:deep_dark': [
            { in: 'minecraft:dirt', out: 'aether:aether_dirt' },
            { in: 'minecraft:farmland', out: 'aether:aether_farmland' },
            { in: 'minecraft:grass_block', out: 'aether:aether_grass_block' },
            { in: 'minecraft:cobblestone', out: 'minecraft:sculk' },
            { in: 'minecraft:stone', out: 'minecraft:sculk' },
            { in: 'minecraft:sand', out: 'aether:cold_aercloud' },
            { in: 'minecraft:sandstone', out: 'aether:quicksoil' }
            // { in: 'minecraft:cobbled_deepslate', out: 'minecraft:sculk' },
            // { in: 'minecraft:deepslate', out: 'minecraft:sculk' }
        ]
    };

    Object.keys(terrain_blocks).forEach((biome) => {
        terrain_blocks[biome].forEach((block) => {
            recipes.push({
                result: { block: block.out },
                ingredient: { block: block.in },
                biome: biome,
                id: `${id_prefix}${biome.split(':')[1]}/${getID(block.in)}_to_${getID(block.out)}`
            });
        });
    });

    const materials = ['golden', 'copper', 'iron'];
    const mcw_types = ['low_candle', 'candle', 'wall_candle', 'double_candle', 'triple_candle'];

    materials.forEach((material) => {
        mcw_types.forEach((type) => {
            recipes.push({
                result: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'false' } },
                ingredient: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'true' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}mcwlights_${material}_${type}_holder`
            });
        });
    });

    colors.forEach((color) => {
        recipes.push(
            {
                result: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'false' } },
                ingredient: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'true' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}supplementaries_candle_holder_${color}`
            },
            {
                result: { block: `occultism:large_candle_${color}`, properties: { lit: 'false' } },
                ingredient: { block: `occultism:large_candle_${color}`, properties: { lit: 'true' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}occultism_large_candle_${color}`
            },
            {
                result: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'false' } },
                ingredient: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'true' } },
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
