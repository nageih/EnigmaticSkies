ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/freezing/';

    const recipes = [
        {
            result: { id: 'pneumaticcraft:plastic', count: 1 },
            ingredient: { item: 'pneumaticcraft:plastic_bucket' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}plastic`
        },
        {
            result: { id: 'aether:blue_berry', count: 1 },
            ingredient: { item: 'aether:blue_aercloud' },
            cookingtime: 5,
            experience: 0.15,
            id: `${id_prefix}blue_berry`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:freezing';
        recipe.category = 'freezable_misc';
        recipe.cookingtime *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
