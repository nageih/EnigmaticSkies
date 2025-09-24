ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/offering/';

    const recipes = [
        {
            output: { id: 'naturesaura:sky_ingot', count: 2 },
            input: { tag: 'c:ingots/soularium' },
            start_item: { item: 'malum:iridescent_ether' },
            id: `${id_prefix}sky_ingot`
        },
        {
            output: { id: 'modern_industrialization:stainless_steel_ingot', count: 1 },
            input: { tag: 'c:ingots/soul_stained_steel' },
            start_item: { item: 'malum:iridescent_ether' },
            id: `${id_prefix}stainless_steel_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
