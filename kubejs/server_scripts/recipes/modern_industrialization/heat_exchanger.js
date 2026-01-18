ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/heat_exchanger/';

    const recipes = [
        {
            fluid_outputs: [
                { fluid: 'modern_industrialization:high_pressure_water', amount: 64 },
                { fluid: 'enigmatica:vapours_of_nyx', amount: 50 }
            ],
            item_inputs: { item: 'malum:umbral_spirit', amount: 1, probability: 0.0 },
            fluid_inputs: [
                { fluid: 'modern_industrialization:high_pressure_steam', amount: 1024 },
                { fluid: 'modern_industrialization:heavy_water', amount: 10 }
            ],
            duration: 30,
            eu: 16,
            id: `${id_prefix}vapours_of_nyx`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:heat_exchanger';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
