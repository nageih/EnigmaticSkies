ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/composter/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: `extended_industrialization:composted_manure`, amount: 1000 }],
            item_inputs: [
                { item: 'minecraft:bone_meal', amount: 9 },
                { item: 'extended_industrialization:mulch', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'extended_industrialization:manure', amount: 500 }],
            duration: 5,
            eu: 4,
            id: `${id_prefix}composted_manure`
        },
        {
            fluid_outputs: [{ fluid: `actuallyadditions:refined_canola_oil`, amount: 2000 }],
            item_inputs: [{ item: 'theurgy:fermentation_starter', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 1000 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}refined_canola_oil_with_fermentation_starter`
        },
        {
            fluid_outputs: [{ fluid: `actuallyadditions:refined_canola_oil`, amount: 1000 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 1000 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}refined_canola_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:composter';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
