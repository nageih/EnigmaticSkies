ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/laser_drill_fluid/';

    const recipes = [
        {
            catalyst: { item: 'industrialforegoing:cyan_laser_lens' },
            output: { fluid: 'enigmatica:briny_seawater', amount: 1000 },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: [] },
                    biome_filter: {
                        blacklist: [],
                        whitelist: ['c:is_ocean']
                    },
                    depth_max: 256,
                    depth_min: -64,
                    weight: 10
                }
            ],
            id: `${id_prefix}briny_seawater`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        if (!recipe.entity) {
            recipe.entity = 'minecraft:empty';
        }
        event.custom(recipe).id(recipe.id);
    });
});
