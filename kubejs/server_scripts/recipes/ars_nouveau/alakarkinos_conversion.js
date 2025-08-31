ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'modern_industrialization:salt_block',
            table: 'enigmatica:archaeology/oceanic_dorodango',
            weight: 100,
            id: `${id_prefix}oceanic_dorodango`
        },
        {
            input: 'createsifter:crushed_basalt',
            table: 'enigmatica:archaeology/volcanic_dorodango',
            weight: 100,
            id: `${id_prefix}volcanic_dorodango`
        },
        {
            input: 'minecraft:mud',
            table: 'enigmatica:archaeology/boggy_dorodango',
            weight: 100,
            id: `${id_prefix}boggy_dorodango`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
