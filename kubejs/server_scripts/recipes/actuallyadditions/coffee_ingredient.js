ServerEvents.recipes((event) => {
    const id_prefix = 'actuallyadditions:coffee_ingredient/';
    const recipes = [
        {
            effects: [{ effect: 'ars_nouveau:mana_regen', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:sourceberry_bush' },
            max_amplifier: 4,
            id: `${id_prefix}mana_regen_from_sourceberry_bush`
        },
        {
            effects: [{ effect: 'ars_nouveau:spell_damage', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:magebloom' },
            max_amplifier: 4,
            id: `${id_prefix}spell_damage_from_magebloom`
        },
        {
            effects: [{ effect: 'ars_nouveau:recovery', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:mendosteen_pod' },
            max_amplifier: 2,
            id: `${id_prefix}recovery_from_mendosteen_pod`
        },
        {
            effects: [{ effect: 'ars_nouveau:shielding', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:bastion_pod' },
            max_amplifier: 2,
            id: `${id_prefix}shielding_from_bastion_pod`
        },
        {
            effects: [{ effect: 'minecraft:jump_boost', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'minecraft:rabbit_foot' },
            max_amplifier: 2,
            id: `${id_prefix}jump_boost_from_rabbit_foot`
        },
        {
            effects: [{ effect: 'minecraft:slow_falling', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'aether:cold_aercloud' },
            max_amplifier: 1,
            id: `${id_prefix}slow_falling_from_phantom_membrane`
        },
        {
            effects: [{ effect: 'cold_sweat:ice_resistance', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:frostaya_pod' },
            max_amplifier: 1,
            id: `${id_prefix}ice_resistance_from_frostaya_pod`
        },
        {
            effects: [{ effect: 'minecraft:fire_resistance', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:bombegranate_pod' },
            max_amplifier: 1,
            id: `${id_prefix}fire_resistance_from_bombegranate_pod`
        }
    ];

    event.forEachRecipe({ type: 'actuallyadditions:coffee_ingredient' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let single_max_levels = [
            'minecraft:blaze_powder',
            'minecraft:fermented_spider_eye',
            'minecraft:pufferfish',
            'minecraft:golden_carrot'
        ];

        if (single_max_levels.includes(recipe.ingredient.item)) {
            recipe.max_amplifier = 1;
        }

        if (recipe.effects) {
            recipe.effects[0].duration = recipe.effects[0].effect == 'minecraft:regeneration' ? 2 * 60 : 10 * 60;
            recipe.id = recipe_id;
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:coffee_ingredient';
        event.custom(recipe).id(recipe.id);
    });
});
