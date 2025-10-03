ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/sandpaper_polishing/';

    const recipes = [
        {
            results: [{ id: 'ae2:charged_certus_quartz_crystal' }],
            ingredients: [{ item: 'ae2:certus_quartz_crystal' }],
            id: `${id_prefix}charged_certus_quartz_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sandpaper_polishing';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
