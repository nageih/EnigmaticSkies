ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/fluid_mixer/';

    const recipes = [
        {
            fluid_output: { id: 'modern_industrialization:diesel', amount: 70 },
            input1: { fluid: 'modern_industrialization:heavy_fuel', amount: 20 },
            input2: { fluid: 'modern_industrialization:light_fuel', amount: 50 },
            item_output: {},
            pressure: 4.0,
            time: 15,
            id: `${id_prefix}diesel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:fluid_mixer`;
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
