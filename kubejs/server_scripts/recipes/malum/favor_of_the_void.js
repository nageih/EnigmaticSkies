ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/favor_of_the_void/';

    const recipes = [
        {
            output: { id: 'malum:runewood_sapling', count: 1 },
            ingredient: { item: 'ars_nouveau:green_archwood_sapling' },
            id: `${id_prefix}runewood_sapling`
        },
        {
            output: { id: 'malum:azure_runewood_sapling', count: 1 },
            ingredient: { item: 'ars_nouveau:blue_archwood_sapling' },
            id: `${id_prefix}azure_runewood_sapling`
        },
        {
            output: { id: 'malum:raw_soulstone', count: 1 },
            ingredient: { tag: 'c:raw_materials/iron' },
            id: `${id_prefix}raw_soulstone`
        },
        {
            output: { id: 'minecraft:crimson_fungus', count: 1 },
            ingredient: { item: 'minecraft:red_mushroom' },
            id: `${id_prefix}crimson_fungus`
        },
        {
            output: { id: 'minecraft:warped_fungus', count: 1 },
            ingredient: { item: 'minecraft:brown_mushroom' },
            id: `${id_prefix}warped_fungus`
        },
        {
            output: { id: 'justdirethings:gooblock_tier3', count: 1 },
            ingredient: { item: 'justdirethings:gooblock_tier2' },
            id: `${id_prefix}gooblock_tier3`
        },
        {
            output: { id: 'oritech:wither_crop_block', count: 1 },
            ingredient: { item: 'minecraft:nether_wart' },
            id: `${id_prefix}wither_crop_block`
        },
        {
            output: { id: 'occultism:otherworld_ashes', count: 1 },
            ingredient: { item: 'supplementaries:ash' },
            id: `${id_prefix}otherworld_ashes`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:favor_of_the_void';
        event.custom(recipe).id(recipe.id);
    });
});
