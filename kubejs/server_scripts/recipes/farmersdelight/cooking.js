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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        event.custom(recipe).id(recipe.id);
    });
});
