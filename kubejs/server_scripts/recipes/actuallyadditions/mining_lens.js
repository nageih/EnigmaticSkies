ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/mining_lens/';

    const recipes = [
        // Holystone
        {
            ingredient: { tag: 'aether:holystone' },
            result: { id: 'aether:ambrosium_ore', count: 1 },
            weight: 10,
            id: `${id_prefix}ambrosium_ore`
        },
        {
            ingredient: { tag: 'aether:holystone' },
            result: { id: 'minecraft:andesite', count: 1 },
            weight: 30,
            id: `${id_prefix}andesite`
        },
        {
            ingredient: { tag: 'aether:holystone' },
            result: { id: 'minecraft:diorite', count: 1 },
            weight: 30,
            id: `${id_prefix}diorite`
        },
        {
            ingredient: { tag: 'aether:holystone' },
            result: { id: 'minecraft:calcite', count: 1 },
            weight: 30,
            id: `${id_prefix}calcite`
        },
        // Moss
        {
            ingredient: { tag: 'chipped:moss_block' },
            result: { id: 'minecraft:copper_ore', count: 1 },
            weight: 10,
            id: `${id_prefix}copper_ore`
        },
        {
            ingredient: { tag: 'chipped:moss_block' },
            result: { id: 'minecraft:stone', count: 1 },
            weight: 30,
            id: `${id_prefix}stone`
        },
        {
            ingredient: { tag: 'chipped:moss_block' },
            result: { id: 'minecraft:tuff', count: 1 },
            weight: 30,
            id: `${id_prefix}tuff`
        },
        {
            ingredient: { tag: 'chipped:moss_block' },
            result: { id: 'minecraft:granite', count: 1 },
            weight: 30,
            id: `${id_prefix}granite`
        }
    ];

    // const stoneVariants = [
    //     'minecraft:deepslate',
    //     'create:asurine',
    //     'create:crimsite',
    //     'create:limestone',
    //     'create:ochrum',
    //     'create:scoria',
    //     'create:scorchia',
    //     'create:veridium'
    // ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:mining_lens';
        event.custom(recipe).id(recipe.id);
    });
});
