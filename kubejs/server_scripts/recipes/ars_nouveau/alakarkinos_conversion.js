ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'minecraft:sand',
            table: 'enigmatica:archaeology/warm_ocean',
            weight: 100,
            id: `${id_prefix}warm_ocean_sand`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
