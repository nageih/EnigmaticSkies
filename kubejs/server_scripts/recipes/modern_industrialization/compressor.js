ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/compressor/';

    const recipes = [
        {
            item_inputs: { item: 'minecraft:coal_block', amount: 1 },
            item_outputs: { item: 'minecraft:diamond', amount: 1 },
            duration: 6000,
            eu: 4,
            id: 'modern_industrialization:vanilla_recipes/compressor/diamond_from_coal'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:compressor';
        event.custom(recipe).id(recipe.id);
    });
});
