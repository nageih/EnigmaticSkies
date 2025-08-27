ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/distillery/';

    const recipes = [
        {
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 80 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 80 }],
            duration: 30,
            eu: 1,
            id: `${id_prefix}refined_canola_oil`
        },
        {
            fluid_inputs: [{ tag: 'c:crude_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_heavy_fuel', amount: 200 }],
            duration: 200,
            eu: 12,
            id: `modern_industrialization:petrochem/distillation/crude_oil_1`
        },
        {
            fluid_inputs: [{ tag: 'c:crude_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_naphtha', amount: 300 }],
            duration: 200,
            eu: 12,
            id: `modern_industrialization:petrochem/distillation/crude_oil_2`
        },
        {
            fluid_inputs: [{ tag: 'c:crude_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_light_fuel', amount: 500 }],
            duration: 200,
            eu: 12,
            id: `modern_industrialization:petrochem/distillation/crude_oil_0`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:distillery';
        event.custom(recipe).id(recipe.id);
    });
});
