ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/favor_of_the_void/';

    const recipes = [
        {
            ingredient: { item: 'ars_nouveau:green_archwood_sapling' },
            output: { id: 'malum:runewood_sapling', count: 1 },
            id: `${id_prefix}runewood_sapling`
        },
        {
            ingredient: { item: 'ars_nouveau:blue_archwood_sapling' },
            output: { id: 'malum:azure_runewood_sapling', count: 1 },
            id: `${id_prefix}azure_runewood_sapling`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:favor_of_the_void';
        event.custom(recipe).id(recipe.id);
    });
});
