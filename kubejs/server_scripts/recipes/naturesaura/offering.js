ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/offering/';

    const recipes = [
        {
            output: { id: 'modern_industrialization:stainless_steel_ingot', count: 1 },
            input: { tag: 'c:ingots/soul_stained_steel' },
            start_item: { item: 'malum:iridescent_ether' },
            id: `${id_prefix}stainless_steel_ingot`
        },
        {
            output: { id: 'actuallyadditions:coffee_cup', count: 1 },
            input: { item: 'actuallyadditions:empty_cup' },
            start_item: { item: 'aether:life_shard' },
            id: `${id_prefix}coffee_cup`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
