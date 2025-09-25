ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/dilapidated_boiler/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:steam', amount: 16000 }],
            item_inputs: [{ tag: 'c:gems/charcoal', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 2000 }],
            eu: 1,
            duration: 100,
            id: `${id_prefix}steam_from_charcoal`
        },
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:steam', amount: 4000 }],
            item_inputs: [{ tag: 'c:tiny_gems/charcoal', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 500 }],
            eu: 1,
            duration: 25,
            id: `${id_prefix}steam_from_tiny_charcoal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:dilapidated_boiler';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
