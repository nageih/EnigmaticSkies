ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/haunting/';

    const recipes = [
        {
            results: [{ id: 'enigmatica:lilys_lilac_cotton_candy' }],
            ingredients: [{ item: 'minecraft:sugar' }],
            id: `${id_prefix}lilys_lilac_cotton_candy`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
