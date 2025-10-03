ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'modern_industrialization:salt_block',
            table: 'enigmatica:archaeology/briny_dorodango',
            weight: 100,
            id: `${id_prefix}briny_dorodango`
        },
        {
            input: 'minecraft:sand',
            table: 'enigmatica:archaeology/silty_dorodango',
            weight: 100,
            id: `${id_prefix}silty_dorodango`
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
        },
        {
            input: 'minecraft:melon',
            table: 'enigmatica:archaeology/melon_ball',
            weight: 100,
            id: `${id_prefix}melon_ball`
        },
        {
            input: 'aether:cold_aercloud',
            table: 'enigmatica:archaeology/cloudy_dorodango',
            weight: 100,
            id: `${id_prefix}cloudy_dorodango`
        },
        {
            input: 'aether:golden_aercloud',
            table: 'enigmatica:archaeology/sulfurous_dorodango',
            weight: 100,
            id: `${id_prefix}sulfurous_dorodango`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
