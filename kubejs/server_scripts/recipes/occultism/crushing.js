ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/crushing/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:echo_shard' },
            ignore_crushing_multiplier: true,
            min_tier: 3,
            result: {
                type: 'occultism:tag',
                tag: 'c:dusts/echo',
                count: 1
            },
            id: `occultism:crushing/echo_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
