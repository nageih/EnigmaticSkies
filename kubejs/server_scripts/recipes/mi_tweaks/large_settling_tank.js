ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/large_settling_tank/';

    const recipes = [
        {
            fluid_outputs: [
                { fluid: 'minecraft:water', amount: 64000 },
                { fluid: 'industrialforegoing:sludge', amount: 16000 }
            ],
            item_inputs: [
                { item: 'minecraft:sand', amount: 16 },
                { item: 'minecraft:gravel', amount: 8 }
            ],
            fluid_inputs: [{ fluid: 'enigmatica:wastewater', amount: 64000 }],
            duration: 1,
            id: `${id_prefix}water_filtering`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:large_settling_tank';
        recipe.eu = 1;
        recipe.duration *= 20;

        event.custom(recipe).id(recipe.id);
    });
});
