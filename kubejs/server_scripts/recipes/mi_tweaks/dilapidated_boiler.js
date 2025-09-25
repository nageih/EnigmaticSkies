ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/dilapidated_boiler/';

    const recipes = [
        {
            item_inputs: { tag: 'c:gems/charcoal', amount: 1 },
            output: 16000,
            id: `${id_prefix}steam_from_charcoal`
        },
        {
            item_inputs: [{ tag: 'enigmatica:planks', amount: 1 }],
            output: 3000,
            id: `${id_prefix}steam_from_planks`
        },
        {
            item_inputs: [{ tag: 'c:tiny_gems/charcoal', amount: 1 }],
            output: 2000,
            id: `${id_prefix}steam_from_tiny_charcoal`
        },
        {
            item_inputs: [{ tag: 'c:rods/wooden', amount: 1 }],
            output: 1000,
            id: `${id_prefix}steam_from_sticks`
        }
    ];

    recipes.forEach((recipe) => {
        let rate = 8;

        recipe.type = 'modern_industrialization:dilapidated_boiler';
        recipe.fluid_outputs = [{ fluid: 'modern_industrialization:steam', amount: recipe.output }];
        (recipe.fluid_inputs = [{ fluid: 'minecraft:water', amount: recipe.output / 8 }]), (recipe.eu = 1);
        recipe.duration = recipe.output / rate;

        event.custom(recipe).id(recipe.id);
    });
});
