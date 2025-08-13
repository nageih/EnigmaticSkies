ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'modern_industrialization:salt_block',
            table: 'enigmatica:archaeology/ocean',
            weight: 100,
            id: `${id_prefix}ocean`
        },
        {
            input: 'createsifter:crushed_basalt',
            table: 'enigmatica:archaeology/archwood_forest',
            weight: 100,
            id: `${id_prefix}archwood_forest`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
