ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/offering/';

    const recipes = [
        {
            output: { id: 'actuallyadditions:coffee_cup', count: 1 },
            input: { item: 'actuallyadditions:empty_cup' },
            start_item: { item: 'aether:life_shard' },
            id: `${id_prefix}coffee_cup`
        },
        {
            output: { id: 'enigmatica:magic_lamp', count: 1 },
            input: { item: 'occultism:magic_lamp_empty' },
            start_item: { item: 'malum:iridescent_ether' },
            id: `${id_prefix}magic_lamp`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
