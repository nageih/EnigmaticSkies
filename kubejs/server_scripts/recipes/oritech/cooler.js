ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/cooler/';
    const recipes = [
        {
            results: [{ id: 'pneumaticcraft:plastic', count: 2 }],
            fluidInput: { fluid: 'pneumaticcraft:plastic', amount: 1000 },
            ingredients: [],
            time: 10,
            id: `${id_prefix}plastic`
        },
        {
            results: [{ id: 'minecraft:snow_block', count: 3 }],
            fluidInput: { fluid: 'modern_industrialization:steam', amount: 1000 },
            ingredients: [],
            time: 10,
            id: `${id_prefix}snow_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:cooler';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
