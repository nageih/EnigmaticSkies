ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/amadron/';

    const recipes = [
        {
            output: { resource: { id: 'industrialforegoing:speed_addon_tier_2', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 16 } },
            maxStock: 4,
            static: false,
            level: 3,
            id: `${id_prefix}speed_addon_tier_2`
        },
        {
            output: { resource: { id: 'industrialforegoing:efficiency_addon_tier_2', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 16 } },
            maxStock: 4,
            static: false,
            level: 3,
            id: `${id_prefix}efficiency_addon_tier_2`
        },
        {
            output: { resource: { id: 'industrialforegoing:processing_addon_tier_2', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 16 } },
            maxStock: 4,
            static: false,
            level: 3,
            id: `${id_prefix}processing_addon_tier_2`
        },
        {
            output: { resource: { id: 'industrialforegoing:speed_addon_tier_1', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 8 } },
            maxStock: 4,
            static: false,
            level: 2,
            id: `${id_prefix}speed_addon_tier_1`
        },
        {
            output: { resource: { id: 'industrialforegoing:efficiency_addon_tier_1', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 8 } },
            maxStock: 4,
            static: false,
            level: 2,
            id: `${id_prefix}efficiency_addon_tier_1`
        },
        {
            output: { resource: { id: 'industrialforegoing:processing_addon_tier_1', count: 1 } },
            input: { resource: { id: 'minecraft:emerald', count: 8 } },
            maxStock: 4,
            static: false,
            level: 2,
            id: `${id_prefix}processing_addon_tier_1`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:amadron`;
        recipe.offer_id = recipe.id;
        event.custom(recipe).id(recipe.id);
    });
});
