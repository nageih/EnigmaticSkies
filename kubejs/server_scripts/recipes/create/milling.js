ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/milling/';

    const recipes = [
        {
            results: [
                { id: 'minecraft:sugar', count: 2 },
                { id: 'minecraft:sugar', chance: 0.1 }
            ],
            ingredients: [{ tag: 'c:crops/rice' }],
            processing_time: 50,
            id: `${id_prefix}sugar_from_rice`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:milling';
        event.custom(recipe).id(recipe.id);
    });
});
