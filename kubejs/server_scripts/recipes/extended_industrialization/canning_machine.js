ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/canning_machine/';

    const recipes = [
        {
            item_outputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 250 }],
            item_inputs: [
                {
                    type: 'neoforge:components',
                    items: 'minecraft:potion',
                    components: { 'minecraft:potion_contents': { potion: 'minecraft:water' } },
                    amount: 1
                }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}emptying_water_bottle`
        },
        {
            item_outputs: [
                {
                    item: 'minecraft:potion',
                    components: { 'minecraft:potion_contents': { potion: 'minecraft:water' } },
                    amount: 1
                }
            ],
            item_inputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 250 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}filling_water_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:canning_machine';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);

        
    });
});
