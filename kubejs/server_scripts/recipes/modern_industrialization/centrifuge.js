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
        },
        {
            fluid_outputs: [{ fluid: 'extended_industrialization:manure', amount: 100 }],
            fluid_inputs: { fluid: 'industrialforegoing:sewage', amount: 1000 },
            eu: 2,
            duration: 10,
            id: `${id_prefix}manure`
        },
        {
            fluid_outputs: [{ fluid: 'industrialforegoing:pink_slime', amount: 100 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            item_inputs: [{ tag: 'c:foods/cooked_meats', amount: 1 }],
            eu: 4,
            duration: 10,
            id: `${id_prefix}pink_slime`
        },
        {
            fluid_outputs: [{ fluid: 'industrialforegoing:meat', amount: 100 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            item_inputs: [{ tag: 'c:foods/raw_meats', amount: 1 }],
            eu: 4,
            duration: 10,
            id: `${id_prefix}meat`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
