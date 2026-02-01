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
            result: { id: 'minecraft:ice', count: 1 },
            ingredient: { item: 'aether:blue_aercloud' },
            cookingtime: 10,
            experience: 0.15,
            id: `${id_prefix}ice_from_blue_aercloud`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:freezing';
        recipe.category = 'freezable_misc';
        recipe.cookingtime *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
