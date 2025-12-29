ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:apotheosis/salvaging/';

    const recipes = [
        {
            outputs: [
                { stack: { id: 'modern_industrialization:iridium_ingot', count: 1 }, min_count: 1, max_count: 3 }
            ],
            input: [
                { item: 'aether:valkyrie_helmet' },
                { item: 'aether:valkyrie_chestplate' },
                { item: 'aether:valkyrie_leggings' },
                { item: 'aether:valkyrie_boots' },
                { item: 'aether:valkyrie_gloves' }
            ],
            id: `${id_prefix}valkyrie_armor`
        },
        {
            outputs: [
                { stack: { id: 'modern_industrialization:iridium_ingot', count: 1 }, min_count: 0, max_count: 1 }
            ],
            input: [
                { item: 'aether:valkyrie_axe' },
                { item: 'aether:valkyrie_pickaxe' },
                { item: 'aether:valkyrie_shovel' },
                { item: 'aether:valkyrie_lance' },
                { item: 'aether:valkyrie_hoe' },
                { item: 'aether:valkyrie_gloves' }
            ],
            id: `${id_prefix}valkyrie_tools`
        },
        {
            outputs: [{ stack: { id: 'aether:zanite_gemstone', count: 1 }, min_count: 1, max_count: 3 }],
            input: [
                { item: 'aether:zanite_helmet' },
                { item: 'aether:zanite_chestplate' },
                { item: 'aether:zanite_leggings' },
                { item: 'aether:zanite_boots' },
                { item: 'aether:zanite_gloves' }
            ],
            id: `${id_prefix}zanite_armor`
        },
        {
            outputs: [{ stack: { id: 'aether:zanite_gemstone', count: 1 }, min_count: 0, max_count: 1 }],
            input: [
                { item: 'aether:zanite_axe' },
                { item: 'aether:zanite_pickaxe' },
                { item: 'aether:zanite_shovel' },
                { item: 'aether:zanite_sword' },
                { item: 'aether:zanite_hoe' }
            ],
            id: `${id_prefix}zanite_tools`
        },
        {
            outputs: [{ stack: { id: 'aether:enchanted_gravitite', count: 1 }, min_count: 1, max_count: 3 }],
            input: [
                { item: 'aether:gravitite_helmet' },
                { item: 'aether:gravitite_chestplate' },
                { item: 'aether:gravitite_leggings' },
                { item: 'aether:gravitite_boots' },
                { item: 'aether:gravitite_gloves' }
            ],
            id: `${id_prefix}gravitite_armor`
        },
        {
            outputs: [{ stack: { id: 'aether:enchanted_gravitite', count: 1 }, min_count: 0, max_count: 1 }],
            input: [
                { item: 'aether:gravitite_axe' },
                { item: 'aether:gravitite_pickaxe' },
                { item: 'aether:gravitite_shovel' },
                { item: 'aether:gravitite_sword' },
                { item: 'aether:gravitite_hoe' }
            ],
            id: `${id_prefix}gravitite_tools`
        },
        {
            outputs: [{ stack: { id: 'aether:holystone', count: 1 }, min_count: 0, max_count: 1 }],
            input: [
                { item: 'aether:holystone_axe' },
                { item: 'aether:holystone_pickaxe' },
                { item: 'aether:holystone_shovel' },
                { item: 'aether:holystone_sword' },
                { item: 'aether:holystone_hoe' }
            ],
            id: `${id_prefix}holystone_tools`
        },
        {
            outputs: [{ stack: { id: 'aether:skyroot_planks', count: 1 }, min_count: 0, max_count: 1 }],
            input: [
                { item: 'aether:skyroot_axe' },
                { item: 'aether:skyroot_pickaxe' },
                { item: 'aether:skyroot_shovel' },
                { item: 'aether:skyroot_sword' },
                { item: 'aether:skyroot_hoe' }
            ],
            id: `${id_prefix}skyroot_tools`
        },
        {
            outputs: [{ stack: { id: 'create:cardboard', count: 1 }, min_count: 1, max_count: 3 }],
            input: [
                { item: 'create:cardboard_helmet' },
                { item: 'create:cardboard_chestplate' },
                { item: 'create:cardboard_leggings' },
                { item: 'create:cardboard_boots' }
            ],
            id: `${id_prefix}cardboard_armor`
        },
        {
            outputs: [{ stack: { id: 'create:cardboard', count: 1 }, min_count: 1, max_count: 3 }],
            input: [{ item: 'create:cardboard_sword' }],
            id: `${id_prefix}cardboard_tools`
        },
        {
            outputs: [
                { stack: { id: 'ars_nouveau:magebloom_fiber', count: 1 }, min_count: 1, max_count: 3 },
                { stack: { id: 'ars_nouveau:source_gem', count: 1 }, min_count: 0, max_count: 1 }
            ],
            input: [
                { item: 'ars_nouveau:battlemage_hood' },
                { item: 'ars_nouveau:battlemage_robes' },
                { item: 'ars_nouveau:battlemage_leggings' },
                { item: 'ars_nouveau:battlemage_boots' },
                { item: 'ars_nouveau:arcanist_hood' },
                { item: 'ars_nouveau:arcanist_robes' },
                { item: 'ars_nouveau:arcanist_leggings' },
                { item: 'ars_nouveau:arcanist_boots' },
                { item: 'ars_nouveau:sorcerer_hood' },
                { item: 'ars_nouveau:sorcerer_robes' },
                { item: 'ars_nouveau:sorcerer_leggings' },
                { item: 'ars_nouveau:sorcerer_boots' }
            ],
            id: `${id_prefix}magebloom_armor`
        },

        {
            outputs: [
                { stack: { id: 'minecraft:string', count: 1 }, min_count: 0, max_count: 1 },
                { stack: { id: 'minecraft:stick', count: 1 }, min_count: 0, max_count: 1 }
            ],
            input: [{ item: 'minecraft:crossbow' }, { item: 'minecraft:bow' }],
            id: `${id_prefix}bows`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            outputs: [{ stack: { id: `minecraft:${color}_wool`, count: 1 }, min_count: 1, max_count: 3 }],
            input: [{ item: `minecraft:${color}_banner` }],
            id: `${id_prefix}${color}_banner`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:salvaging';
        event.custom(recipe).id(recipe.id);

        
    });
});
