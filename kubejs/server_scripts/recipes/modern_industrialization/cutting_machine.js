ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/cutting_machine/';

    const recipes = [
        {
            item_outputs: [{ item: 'pneumaticcraft:aphorism_tile', amount: 4 }],
            item_inputs: [{ item: 'naturesaura:infused_stone', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}aphorism_tile`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:andesite_alloy_rod', amount: 2 }],
            item_inputs: [{ tag: 'c:ingots/andesite_alloy', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}andesite_alloy_rod`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:cutting_machine';
        recipe.duration *= 20;

        event.custom(recipe).id(recipe.id);

        
    });
});
