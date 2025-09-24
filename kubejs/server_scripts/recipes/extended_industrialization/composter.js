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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:composter';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
