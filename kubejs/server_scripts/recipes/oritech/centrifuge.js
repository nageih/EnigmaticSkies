ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge/';
    const recipes = [
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ item: 'oritech:polymer_resin' }],
            time: 50,
            id: `${id_prefix}carbon_fibre_strands`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
