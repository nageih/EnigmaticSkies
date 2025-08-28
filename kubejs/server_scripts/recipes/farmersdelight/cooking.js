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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        event.custom(recipe).id(recipe.id);
    });
});
