ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            validItems: [
                'pneumaticcraft:compressed_iron_helmet',
                'pneumaticcraft:compressed_iron_chestplate',
                'pneumaticcraft:compressed_iron_leggings',
                'pneumaticcraft:compressed_iron_boots'
            ],
            regex: { itemIdRegex: `compressed_iron_.+` },
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:earthen', count: 8 }
            ],
            id: `${id_prefix}compressed_iron`
        },
        {
            validItems: [
                'aether:zanite_sword',
                'aether:zanite_shovel',
                'aether:zanite_pickaxe',
                'aether:zanite_axe',
                'aether:zanite_hoe',
                'aether:zanite_helmet',
                'aether:zanite_chestplate',
                'aether:zanite_leggings',
                'aether:zanite_boots',
                'aether:zanite_gloves'
            ],
            regex: { itemIdRegex: `zanite_.+` },
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            validItems: [
                'aether:neptune_helmet',
                'aether:neptune_chestplate',
                'aether:neptune_leggings',
                'aether:neptune_boots',
                'aether:neptune_gloves'
            ],
            regex: { itemIdRegex: `neptune_.+` },
            repairMaterial: { tag: `c:essences/water`, count: 1 },
            spirits: [
                { type: 'malum:aqueous', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            validItems: [
                'aether:gravitite_sword',
                'aether:gravitite_shovel',
                'aether:gravitite_pickaxe',
                'aether:gravitite_axe',
                'aether:gravitite_hoe',
                'aether:gravitite_helmet',
                'aether:gravitite_chestplate',
                'aether:gravitite_leggings',
                'aether:gravitite_boots',
                'aether:gravitite_gloves'
            ],
            regex: { itemIdRegex: `gravitite_.+` },
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            validItems: [
                'aether:phoenix_bow',
                'aether:phoenix_helmet',
                'aether:phoenix_chestplate',
                'aether:phoenix_leggings',
                'aether:phoenix_boots',
                'aether:phoenix_gloves'
            ],
            regex: { itemIdRegex: `phoenix_.+` },
            repairMaterial: { tag: `c:essences/fire`, count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            validItems: [
                'aether:valkyrie_lance',
                'aether:valkyrie_pickaxe',
                'aether:valkyrie_axe',
                'aether:valkyrie_hoe',
                'aether:valkyrie_shovel',
                'aether:valkyrie_helmet',
                'aether:valkyrie_chestplate',
                'aether:valkyrie_leggings',
                'aether:valkyrie_boots',
                'aether:valkyrie_gloves'
            ],
            regex: { itemIdRegex: `valkyrie_.+` },
            repairMaterial: { tag: `c:ingots/iridium`, count: 2 },
            spirits: [
                { type: 'malum:sacred', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            validItems: [
                'aether:obsidian_helmet',
                'aether:obsidian_chestplate',
                'aether:obsidian_leggings',
                'aether:obsidian_boots',
                'aether:obsidian_gloves'
            ],
            regex: { itemIdRegex: `obsidian_.+` },
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}obsidian`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_repair';
        event.custom(recipe).id(recipe.id);

        
    });
});
