ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/splashing/';

    const recipes = [
        {
            results: [{ id: 'actuallyadditions:rice_dough' }],
            ingredients: [{ item: 'farmersdelight:rice' }],
            id: `${id_prefix}rice_dough`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:splashing';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
