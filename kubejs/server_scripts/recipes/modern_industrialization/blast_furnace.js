ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/blast_furnace/';

    const recipes = [
        {
            item_outputs: { item: 'modern_industrialization:steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:blaze_ember', amount: 100 }],
            item_inputs: { tag: 'c:ingots/iron', amount: 1 },
            duration: 20,
            eu: 2,
            id: `${id_prefix}steel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:blast_furnace';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
