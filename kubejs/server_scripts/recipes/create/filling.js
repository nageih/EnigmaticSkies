ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/filling/';

    const recipes = [
        {
            results: [{ id: 'enigmatica:luminiferous_aether_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                { type: 'fluid_stack', fluid: 'modern_industrialization:helium_plasma', amount: 250 }
            ],
            id: `${id_prefix}luminiferous_aether_bottle_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
