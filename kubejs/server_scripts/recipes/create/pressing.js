ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/pressing/';

    const recipes = [
        {
            results: [{ id: 'modern_industrialization:andesite_alloy_plate' }],
            ingredients: [{ tag: 'c:ingots/andesite_alloy' }],
            id: `${id_prefix}andesite_alloy_plate`
        },
        {
            results: [{ id: 'modern_industrialization:sky_plate' }],
            ingredients: [{ tag: 'c:ingots/sky' }],
            id: `${id_prefix}sky_plate`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        event.custom(recipe).id(recipe.id);

        
    });
});
