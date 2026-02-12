ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/block_placement_ban/';

    const recipes = [
        {
            ingredient: { tag: 'enigmatica:lantern' },
            biome: '#aether:ultracold',
            id: 'aether:lantern_block_ban'
        },
        {
            ingredient: { tag: 'enigmatica:torch' },
            biome: '#aether:ultracold',
            id: 'aether:torch_block_ban'
        },
        {
            ingredient: { block: 'minecraft:dispenser' },
            biome: '#enigmatica:global',
            id: `${id_prefix}dispenser`
        },
        {
            ingredient: { block: 'minecraft:kelp' },
            biome: '#enigmatica:global',
            id: `${id_prefix}kelp`
        },
        {
            ingredient: { block: 'justdirethings:time_crystal_budding_block' },
            biome: '#enigmatica:global',
            id: `${id_prefix}time_crystal_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:block_placement_ban';
        event.custom(recipe).id(recipe.id);
    });
});
