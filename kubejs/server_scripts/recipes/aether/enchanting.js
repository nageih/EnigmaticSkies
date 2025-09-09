ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/enchanting/';

    const recipes = [
        {
            result: { id: 'aether:golden_oak_sapling', count: 1 },
            ingredient: { item: 'aether:skyroot_sapling' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}golden_oak_sapling`
        },
        {
            result: Item.of(
                'occultism:fragile_soul_gem[entity_data={id:"minecraft:villager",VillagerData:{type:"minecraft:snow"}}]'
            ).toJson(),
            ingredient: { item: 'supplementaries:statue' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}villager`
        },
        {
            result: { id: 'justdirethings:gooblock_tier1', count: 1 },
            ingredient: { item: 'minecraft:clay' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}gooblock_tier1`
        },
        {
            result: { id: 'aether:golden_gummy_swet', count: 1 },
            ingredient: { item: 'aether:blue_gummy_swet' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}golden_gummy_swet`
        },
        {
            result: { id: 'ars_nouveau:sourceberry_bush', count: 1 },
            ingredient: { item: 'aether:blue_berry' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}sourceberry_bush`
        },
        {
            result: { id: 'farmersdelight:rice', count: 1 },
            ingredient: { item: 'farmersdelight:straw_bale' },
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}rice`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:enchanting';
        recipe.category = 'enchanting_misc';
        event.custom(recipe).id(recipe.id);
    });
});
