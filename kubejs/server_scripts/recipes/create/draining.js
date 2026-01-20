ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/emptying/';

    const recipes = [
        {
            results: [{ id: 'minecraft:glass_bottle' }, { id: 'supplementaries:lumisene', amount: 250 }],
            ingredients: [{ item: 'supplementaries:lumisene_bottle' }],
            id: `${id_prefix}lumisene_from_bottle`
        },
        {
            results: [{ id: 'minecraft:bucket' }, { id: 'supplementaries:lumisene', amount: 1000 }],
            ingredients: [{ item: 'supplementaries:lumisene_bucket' }],
            id: `${id_prefix}lumisene_from_bucket`
        },
        {
            results: [{ id: 'minecraft:glass_bottle' }, { id: 'modern_industrialization:helium_plasma', amount: 250 }],
            ingredients: [{ item: 'enigmatica:luminiferous_aether_bottle' }],
            id: `${id_prefix}luminiferous_aether_bottle_from_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:emptying';
        event.custom(recipe).id(recipe.id);
    });
});
