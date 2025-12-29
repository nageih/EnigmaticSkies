ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/mining_lens/';

    const recipes = [
        {
            result: { id: 'enigmatica:brilliant_cold_aercloud', count: 1 },
            ingredient: { item: 'aether:cold_aercloud' },
            weight: 100,
            id: `${id_prefix}brilliant_cold_aercloud`
        },
        {
            result: { id: 'enigmatica:brilliant_sand', count: 1 },
            ingredient: { item: 'minecraft:sand' },
            weight: 100,
            id: `${id_prefix}brilliant_sand`
        },
        {
            result: { id: 'enigmatica:brilliant_mud', count: 1 },
            ingredient: { item: 'minecraft:mud' },
            weight: 100,
            id: `${id_prefix}brilliant_mud`
        },
        {
            result: { id: 'enigmatica:brilliant_smooth_basalt', count: 1 },
            ingredient: { item: 'minecraft:smooth_basalt' },
            weight: 100,
            id: `${id_prefix}brilliant_smooth_basalt`
        },
        {
            result: { id: 'enigmatica:brilliant_salt', count: 1 },
            ingredient: { item: 'modern_industrialization:salt_block' },
            weight: 100,
            id: `${id_prefix}brilliant_salt`
        },
        {
            result: { id: 'enigmatica:brilliant_sculk', count: 1 },
            ingredient: { item: 'minecraft:sculk' },
            weight: 100,
            id: `${id_prefix}brilliant_sculk`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:mining_lens';
        event.custom(recipe).id(recipe.id);

        
    });
});
