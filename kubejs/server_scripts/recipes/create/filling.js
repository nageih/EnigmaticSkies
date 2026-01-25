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
        },
        {
            results: [{ id: 'enigmatica:vapours_of_nyx_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                { type: 'fluid_stack', fluid: 'enigmatica:vapours_of_nyx', amount: 250 }
            ],
            id: `${id_prefix}vapours_of_nyx_bottle_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
