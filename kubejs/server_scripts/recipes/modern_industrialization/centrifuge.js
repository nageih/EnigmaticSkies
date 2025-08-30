ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/centrifuge/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 160 }],
            item_inputs: [{ item: 'actuallyadditions:canola', amount: 1 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}canola_oil`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:lava', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_lava', amount: 1 }],
            eu: 4,
            duration: 1,
            id: `${id_prefix}lava`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_water', amount: 1 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}water`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
