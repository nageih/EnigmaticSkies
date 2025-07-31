ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'minecraft:sand',
            table: 'enigmatica:archaeology/sand',
            weight: 100,
            id: `${id_prefix}sand`
        },
        {
            input: 'createsifter:crushed_basalt',
            table: 'enigmatica:archaeology/crushed_basalt',
            weight: 100,
            id: `${id_prefix}crushed_basalt`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
