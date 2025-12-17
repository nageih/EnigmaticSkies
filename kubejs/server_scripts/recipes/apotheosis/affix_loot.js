ServerEvents.generateData('before_mods', (event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/';

    const recipes = [
        {
            stacks: [
                { id: 'aether:holystone_axe' },
                { id: 'aether:holystone_pickaxe' },
                { id: 'aether:holystone_shovel' },
                { id: 'aether:holystone_sword' },

                { id: 'create:cardboard_sword' },
                { id: 'create:cardboard_helmet' },
                { id: 'create:cardboard_chestplate' },
                { id: 'create:cardboard_leggings' },
                { id: 'create:cardboard_boots' }
            ],
            weights: { haven: { weight: 25 } }
        },
        {
            stacks: [
                { id: 'aether:neptune_helmet' },
                { id: 'aether:neptune_chestplate' },
                { id: 'aether:neptune_leggings' },
                { id: 'aether:neptune_boots' }
            ],
            weights: {
                haven: { weight: 10 },
                frontier: { weight: 10, quality: 1.0 }
            }
        },
        {
            stacks: [
                { id: 'aether:gravitite_axe' },
                { id: 'aether:gravitite_pickaxe' },
                { id: 'aether:gravitite_shovel' },
                { id: 'aether:gravitite_sword' },
                { id: 'aether:gravitite_helmet' },
                { id: 'aether:gravitite_chestplate' },
                { id: 'aether:gravitite_leggings' },
                { id: 'aether:gravitite_boots' },

                { id: 'ars_nouveau:sorcerer_hood' },
                { id: 'ars_nouveau:sorcerer_robes' },
                { id: 'ars_nouveau:sorcerer_leggings' },
                { id: 'ars_nouveau:sorcerer_boots' }
            ],
            weights: {
                haven: { weight: 5 },
                frontier: { weight: 10 },
                ascent: { weight: 5 }
            }
        },
        {
            stacks: [
                { id: 'aether:zanite_axe' },
                { id: 'aether:zanite_pickaxe' },
                { id: 'aether:zanite_shovel' },
                { id: 'aether:zanite_sword' },
                { id: 'aether:zanite_helmet' },
                { id: 'aether:zanite_chestplate' },
                { id: 'aether:zanite_leggings' },
                { id: 'aether:zanite_boots' },

                { id: 'ars_nouveau:arcanist_hood' },
                { id: 'ars_nouveau:arcanist_robes' },
                { id: 'ars_nouveau:arcanist_leggings' },
                { id: 'ars_nouveau:arcanist_boots' }
            ],
            weights: {
                frontier: { quality: 1.0, weight: 25 },
                ascent: { weight: 10 },
                summit: { weight: 10 }
            }
        },
        {
            stacks: [
                { id: 'aether:valkyrie_axe' },
                { id: 'aether:valkyrie_pickaxe' },
                { id: 'aether:valkyrie_shovel' },
                { id: 'aether:valkyrie_lance' },
                { id: 'aether:valkyrie_helmet' },
                { id: 'aether:valkyrie_chestplate' },
                { id: 'aether:valkyrie_leggings' },
                { id: 'aether:valkyrie_boots' },

                { id: 'ars_nouveau:battlemage_hood' },
                { id: 'ars_nouveau:battlemage_robes' },
                { id: 'ars_nouveau:battlemage_leggings' },
                { id: 'ars_nouveau:battlemage_boots' }
            ],
            weights: {
                ascent: { weight: 25 },
                summit: { weight: 25 },
                pinnacle: { weight: 5 }
            }
        },
        {
            stacks: [
                { id: 'aether:holy_sword' },
                { id: 'aether:vampire_blade' },
                { id: 'aether:lightning_sword' },
                { id: 'aether:flaming_sword' },
                { id: 'aether:holy_sword' },
                { id: 'aether:phoenix_helmet' },
                { id: 'aether:phoenix_chestplate' },
                { id: 'aether:phoenix_leggings' },
                { id: 'aether:phoenix_boots' }
            ],
            weights: {
                summit: { quality: 1.0, weight: 5 },
                pinnacle: { quality: 2.0, weight: 25 }
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:affix_loot_entry';
        let stacks = recipe.stacks;
        delete recipe.stacks;

        stacks.forEach((stack) => {
            recipe.stack = stack;
            event.json(`${id_prefix}${getID(recipe.stack.id)}`, recipe);
        });
    });
});
