ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/cooking/';

    const recipes = [
        {
            result: { id: 'farmersdelight:beef_stew', count: 1 },
            ingredients: [
                { tag: 'c:foods/raw_beef' },
                { item: 'minecraft:carrot' },
                { item: 'minecraft:potato' },
                { tag: 'c:mushrooms' }
            ],
            recipe_book_tab: 'meals',
            experience: 1.0,
            id: `farmersdelight:cooking/beef_stew`
        },
        {
            result: { id: 'justdirethings:gooblock_tier2', count: 1 },
            ingredients: [
                { item: 'justdirethings:gooblock_tier1' },
                { item: 'minecraft:fire_charge' },
                { item: 'arsdelight:unstable_cocktail' }
            ],
            recipe_book_tab: 'meals',
            experience: 1.0,
            id: `${id_prefix}gooblock_tier2`
        },
        {
            result: { id: 'aether:blue_gummy_swet', count: 1 },
            ingredients: [{ item: 'aether:swet_ball' }, { item: 'minecraft:sugar' }],
            recipe_book_tab: 'meals',
            experience: 1.0,
            id: `${id_prefix}blue_gummy_swet`
        },
        {
            result: { id: 'arsdelight:source_berry_jelly', count: 1 },
            ingredients: [
                { item: 'arsdelight:source_berry_jam' },
                { item: 'arsdelight:source_berry_jam' },
                { item: 'arsdelight:source_berry_jam' },
                { item: 'industrialforegoing:pink_slime' }
            ],
            container: { id: 'minecraft:bowl', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}source_berry_jelly`
        },
        {
            result: { id: 'arsdelight:bastion_jelly', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:bastion_pod' },
                { item: 'ars_nouveau:bastion_pod' },
                { item: 'arsdelight:vexing_bark' },
                { item: 'ars_nouveau:sourceberry_bush' },
                { item: 'industrialforegoing:pink_slime' },
                { item: 'minecraft:sugar' }
            ],
            container: { id: 'minecraft:bowl', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}bastion_jelly`
        },
        {
            result: { id: 'arsdelight:bombegrante_jelly', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:bombegranate_pod' },
                { item: 'ars_nouveau:bombegranate_pod' },
                { item: 'arsdelight:blazing_bark' },
                { item: 'ars_nouveau:sourceberry_bush' },
                { item: 'industrialforegoing:pink_slime' },
                { item: 'minecraft:sugar' }
            ],
            container: { id: 'minecraft:bowl', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}bombegrante_jelly`
        },
        {
            result: { id: 'arsdelight:mendosteen_jelly', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:mendosteen_pod' },
                { item: 'ars_nouveau:mendosteen_pod' },
                { item: 'arsdelight:flourishing_bark' },
                { item: 'ars_nouveau:sourceberry_bush' },
                { item: 'industrialforegoing:pink_slime' },
                { item: 'minecraft:sugar' }
            ],
            container: { id: 'minecraft:bowl', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}mendosteen_jelly`
        },
        {
            result: { id: 'arsdelight:frostaya_jelly', count: 1 },
            ingredients: [
                { item: 'ars_nouveau:frostaya_pod' },
                { item: 'ars_nouveau:frostaya_pod' },
                { item: 'arsdelight:cascading_bark' },
                { item: 'ars_nouveau:sourceberry_bush' },
                { item: 'industrialforegoing:pink_slime' },
                { item: 'minecraft:sugar' }
            ],
            container: { id: 'minecraft:bowl', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}frostaya_jelly`
        },
        {
            result: { id: 'arsdelight:source_berry_cupcake', count: 4 },
            ingredients: [
                { item: 'arsdelight:arch_sauce' },
                { item: 'ars_nouveau:sourceberry_bush' },
                { tag: 'c:eggs' },
                { tag: 'c:flours/wheat' },
                { tag: 'c:flours/wheat' },
                { tag: 'c:foods/milk' }
            ],
            container: { id: 'minecraft:paper', count: 1 },
            experience: 0.1,
            recipe_book_tab: 'meals',
            id: `${id_prefix}source_berry_cupcake`
        },
        {
            result: { id: 'farmersdelight:dumplings', count: 4 },
            ingredients: [
                { tag: 'c:foods/dough' },
                { tag: 'c:crops/cabbage' },
                { tag: 'c:crops/onion' },
                {
                    type: 'neoforge:compound',
                    children: [
                        { tag: 'c:foods/raw_chicken' },
                        { tag: 'c:foods/raw_pork' },
                        { tag: 'c:foods/raw_beef' },
                        { item: 'minecraft:brown_mushroom' }
                    ]
                }
            ],
            experience: 1.0,
            recipe_book_tab: 'misc',
            id: `${id_prefix}dumplings`
        },
        {
            result: { id: 'supplementaries:soap', count: 6 },
            ingredients: [
                { tag: 'c:dusts/ash' },
                { tag: 'c:dusts/ash' },
                { tag: 'c:dusts/ash' },
                { tag: 'c:dusts/ash' },
                { tag: 'c:tallow' }
            ],
            experience: 0.1,
            recipe_book_tab: 'misc',
            id: `${id_prefix}soap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        event.custom(recipe).id(recipe.id);
    });
});
