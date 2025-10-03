ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/macerator/';

    const recipes = [
        {
            item_outputs: [
                { item: 'pneumaticcraft:wheat_flour', amount: 1 },
                { item: 'pneumaticcraft:wheat_flour', amount: 1, probability: 0.5 }
            ],
            item_inputs: [{ item: 'minecraft:wheat', amount: 1 }],
            duration: 30,
            eu: 1,
            id: `${id_prefix}wheat_flour`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:macerator';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
