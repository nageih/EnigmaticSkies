ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/dilapidated_boiler/';

    const recipes = [
        {
            item_inputs: { tag: 'c:gems/charcoal', amount: 1 },
            eu_output: 8000,
            id: `${id_prefix}steam_from_charcoal`
        },
        {
            item_inputs: { tag: 'enigmatica:planks', amount: 1 },
            eu_output: 1500,
            id: `${id_prefix}steam_from_planks`
        },
        {
            item_inputs: { tag: 'c:tiny_gems/charcoal', amount: 1 },
            eu_output: 1000,
            id: `${id_prefix}steam_from_tiny_charcoal`
        },
        {
            item_inputs: { tag: 'c:rods/wooden', amount: 1 },
            eu_output: 500,
            id: `${id_prefix}steam_from_sticks`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:dilapidated_boiler';
        let duration = 20;
        let eu_per_operation = 8 * duration;

        recipe.item_inputs.probability = 1 / (recipe.eu_output / eu_per_operation);
        recipe.fluid_outputs = { fluid: 'modern_industrialization:steam', amount: eu_per_operation };
        recipe.fluid_inputs = { fluid: 'minecraft:water', amount: eu_per_operation / 8 };
        recipe.eu = 1;
        recipe.duration = duration;

        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
