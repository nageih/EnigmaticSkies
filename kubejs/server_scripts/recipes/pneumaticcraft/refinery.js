ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/refinery/';

    const recipes = [
        {
            outputs: [
                { id: 'modern_industrialization:light_fuel', amount: 5 },
                { id: 'modern_industrialization:heavy_fuel', amount: 2 },
                { id: 'modern_industrialization:naphtha', amount: 3 }
            ],
            input: { fluid: 'pneumaticcraft:oil', amount: 10 },
            temperature: { min: 373 },
            id: `${id_prefix}oil_processing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:refinery`;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
