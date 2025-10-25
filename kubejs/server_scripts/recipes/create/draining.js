ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/emptying/';

    const recipes = [
        {
            results: [{ id: 'minecraft:glass_bottle' }, { amount: 250, id: 'supplementaries:lumisene' }],
            ingredients: [{ item: 'supplementaries:lumisene_bottle' }],
            id: `${id_prefix}lumisene_from_bottle`
        },
        {
            results: [{ id: 'minecraft:bucket' }, { amount: 1000, id: 'supplementaries:lumisene' }],
            ingredients: [{ item: 'supplementaries:lumisene_bucket' }],
            id: `${id_prefix}lumisene_from_bucket`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:emptying';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
