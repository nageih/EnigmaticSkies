ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/electrolyzer/';

    const recipes = [
        {
            item_inputs: [{ item: 'appflux:redstone_crystal', amount: 1 }],
            item_outputs: [{ item: 'appflux:charged_redstone', amount: 1 }],
            eu: 8,
            duration: 60,
            id: `${id_prefix}charged_redstone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:electrolyzer';
        event.custom(recipe).id(recipe.id);
    });
});
