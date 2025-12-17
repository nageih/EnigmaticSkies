ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/';

    const recipes = [
        { id: 'stone_axe' },
        { id: 'stone_pickaxe' },
        { id: 'stone_shovel' },
        { id: 'stone_sword' },

        { id: 'golden_helmet' },
        { id: 'golden_chestplate' },
        { id: 'golden_leggings' },
        { id: 'golden_boots' },
        { id: 'golden_axe' },
        { id: 'golden_pickaxe' },
        { id: 'golden_shovel' },
        { id: 'golden_sword' },

        { id: 'chainmail_helmet' },
        { id: 'chainmail_chestplate' },
        { id: 'chainmail_leggings' },
        { id: 'chainmail_boots' },

        { id: 'iron_helmet' },
        { id: 'iron_chestplate' },
        { id: 'iron_leggings' },
        { id: 'iron_boots' },
        { id: 'iron_axe' },
        { id: 'iron_pickaxe' },
        { id: 'iron_shovel' },
        { id: 'iron_sword' },

        { id: 'diamond_helmet' },
        { id: 'diamond_chestplate' },
        { id: 'diamond_leggings' },
        { id: 'diamond_boots' },
        { id: 'diamond_axe' },
        { id: 'diamond_pickaxe' },
        { id: 'diamond_shovel' },
        { id: 'diamond_sword' },

        { id: 'netherite_helmet' },
        { id: 'netherite_chestplate' },
        { id: 'netherite_leggings' },
        { id: 'netherite_boots' },
        { id: 'netherite_axe' },
        { id: 'netherite_pickaxe' },
        { id: 'netherite_shovel' },
        { id: 'netherite_sword' }
    ];

    recipes.forEach((recipe) => {
        event.json(`${id_prefix}${getID(recipe.id)}`, never_load);
    });
});
