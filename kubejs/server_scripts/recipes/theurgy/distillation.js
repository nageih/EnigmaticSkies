ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/distillation/';

    const recipes = [
        {
            result: { id: 'theurgy:mercury_shard', count: 4 },
            ingredient: { ingredient: { tag: 'c:dusts/sky_stone' }, count: 1 },
            time: 5,
            id: `${id_prefix}mercury_shard`
        },
        {
            result: { id: 'minecraft:echo_shard', count: 1 },
            ingredient: { ingredient: { tag: 'c:dusts/echo' }, count: 4 },
            time: 5,
            id: `${id_prefix}echo_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:distillation';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
