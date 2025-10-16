ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_focusing/';

    const recipes = [];

    const materials = ['copper', 'gold', 'iron'];

    materials.forEach((material) => {
        recipes.push({
            output: { id: `malum:${material}_node`, count: 1 },
            ingredient: { item: `malum:${material}_impetus` },
            spirits: [
                { type: 'earthen', count: 2 },
                { type: 'infernal', count: 2 }
            ],
            durabilityCost: 2,
            time: 15,
            id: `${id_prefix}node_focusing_${material}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_focusing';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
