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
            item_outputs: [{ item: 'industrialforegoing:fertilizer', amount: 6 }],
            fluid_outputs: [
                { fluid: 'extended_industrialization:manure', amount: 1000 },
                { fluid: 'enigmatica:wastewater', amount: 1000 }
            ],
            fluid_inputs: { fluid: 'industrialforegoing:sewage', amount: 8000 },
            eu: 2,
            duration: 5,
            id: `${id_prefix}manure`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:lava', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_lava', amount: 1, probability: 1 / 4 }],
            eu: 4,
            duration: 1,
            id: `${id_prefix}lava`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_water', amount: 1, probability: 1 / 8 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}water`
        },

        {
            fluid_outputs: [{ fluid: 'industrialforegoing:pink_slime', amount: 100 }],
            item_inputs: [{ tag: 'c:foods/cooked_meat', amount: 1 }],
            eu: 2,
            duration: 5,
            id: `${id_prefix}pink_slime`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:carbon_dust', amount: 1 }],
            item_inputs: [{ tag: 'c:essences/rotting_essence', amount: 4 }],
            eu: 2,
            duration: 5,
            id: `${id_prefix}carbon_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
