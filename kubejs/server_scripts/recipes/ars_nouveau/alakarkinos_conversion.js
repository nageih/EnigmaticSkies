ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/alakarkinos_conversion/';

    const recipes = [
        {
            input: 'minecraft:melon',
            table: 'enigmatica:archaeology/melon_ball',
            weight: 100,
            id: `${id_prefix}melon_ball`
        },
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
        },
        {
            input: 'minecraft:sculk',
            table: 'enigmatica:archaeology/reverberating_dorodango',
            weight: 100,
            id: `${id_prefix}reverberating_dorodango`
        },

        {
            input: 'enigmatica:brilliant_salt',
            table: 'enigmatica:archaeology/brilliant_briny_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_briny_dorodango`
        },
        {
            input: 'enigmatica:brilliant_sand',
            table: 'enigmatica:archaeology/brilliant_silty_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_silty_dorodango`
        },
        {
            input: 'enigmatica:brilliant_crushed_basalt',
            table: 'enigmatica:archaeology/brilliant_volcanic_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_volcanic_dorodango`
        },
        {
            input: 'enigmatica:brilliant_mud',
            table: 'enigmatica:archaeology/brilliant_boggy_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_boggy_dorodango`
        },
        {
            input: 'enigmatica:brilliant_cold_aercloud',
            table: 'enigmatica:archaeology/brilliant_cloudy_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_cloudy_dorodango`
        },
        {
            input: 'enigmatica:brilliant_golden_aercloud',
            table: 'enigmatica:archaeology/brilliant_sulfurous_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_sulfurous_dorodango`
        },
        {
            input: 'enigmatica:brilliant_sculk',
            table: 'enigmatica:archaeology/brilliant_reverberating_dorodango',
            weight: 100,
            id: `${id_prefix}brilliant_reverberating_dorodango`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:alakarkinos_conversion';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
