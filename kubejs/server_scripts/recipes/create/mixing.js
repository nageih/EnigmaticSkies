ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/mixing/';

    const recipes = [
        {
            results: [{ id: 'oritech:still_fuel', amount: 1000 }],
            ingredients: [{ item: 'oritech:fluxite' }, { type: 'fluid_tag', fluid_tag: 'c:crude_oil', amount: 1000 }],
            id: `${id_prefix}turbofuel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
