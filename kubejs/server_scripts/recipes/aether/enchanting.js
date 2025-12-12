ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/enchanting/';

    const recipes = [
        {
            result: { id: 'aether:golden_oak_sapling', count: 1 },
            ingredient: { item: 'aether:skyroot_sapling' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}golden_oak_sapling`
        },
        {
            result: Item.of(
                'occultism:fragile_soul_gem[entity_data={id:"minecraft:villager",VillagerData:{type:"minecraft:snow"}}]'
            ).toJson(),
            ingredient: { item: 'supplementaries:statue' },
            cookingtime: 1,
            experience: 0.15,
            id: `${id_prefix}villager`
        },
        {
            result: { id: 'justdirethings:gooblock_tier1', count: 1 },
            ingredient: { item: 'minecraft:clay' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}gooblock_tier1`
        },
        {
            result: { id: 'aether:golden_gummy_swet', count: 1 },
            ingredient: { item: 'aether:blue_gummy_swet' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}golden_gummy_swet`
        },
        {
            result: { id: 'ars_nouveau:sourceberry_bush', count: 1 },
            ingredient: { item: 'aether:blue_berry' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}sourceberry_bush`
        },
        {
            result: { id: 'farmersdelight:rice', count: 1 },
            ingredient: { item: 'farmersdelight:straw_bale' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}rice`
        },
        {
            result: { id: 'ars_nouveau:magebloom_crop', count: 1 },
            ingredient: { item: 'farmersdelight:rice_bag' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}magebloom_crop`
        },
        {
            result: { id: 'aether:berry_bush_stem', count: 1 },
            ingredient: { item: 'minecraft:dead_bush' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}berry_bush_stem`
        },
        {
            result: { id: 'mi_tweaks:snack_packer', count: 1 },
            ingredient: { item: 'modern_industrialization:fire_clay_bricks' },
            cookingtime: 5,
            experience: 0.15,
            id: `${id_prefix}snack_packer`
        },
        {
            result: { id: 'minecraft:wither_rose', count: 1 },
            ingredient: { item: 'aether:white_flower' },
            cookingtime: 30,
            experience: 0.15,
            id: `${id_prefix}wither_rose`
        },
        {
            result: { id: 'minecraft:pitcher_pod', count: 1 },
            ingredient: { item: 'minecraft:pitcher_plant' },
            cookingtime: 5,
            experience: 0.15,
            id: `${id_prefix}pitcher_pod`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:enchanting';
        recipe.category = 'enchanting_misc';
        recipe.cookingtime *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
