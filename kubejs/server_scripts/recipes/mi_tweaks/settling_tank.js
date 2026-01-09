ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/settling_tank/';

    const recipes = [
        {
            fluid_outputs: [
                { fluid: 'minecraft:water', amount: 1000 },
                { fluid: 'industrialforegoing:sludge', amount: 250 }
            ],
            item_inputs: [
                { item: 'minecraft:sand', amount: 1, probability: 0.25 },
                { item: 'minecraft:gravel', amount: 1, probability: 0.1 }
            ],
            fluid_inputs: [{ fluid: 'enigmatica:wastewater', amount: 1000 }],
            duration: 1,
            id: `${id_prefix}water_filtering`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:settling_tank';
        recipe.eu = 1;
        recipe.duration *= 20;

        event.custom(recipe).id(recipe.id);
    });
});
