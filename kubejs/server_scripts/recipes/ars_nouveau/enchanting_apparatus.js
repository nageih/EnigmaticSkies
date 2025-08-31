ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:wixie_charm', count: 1 },
            reagent: { item: 'ars_nouveau:wixie_shards' },
            pedestalItems: [
                { item: 'minecraft:brewing_stand' },
                { item: 'arsdelight:source_berry_pie_slice' },
                { item: 'minecraft:crafting_table' },
                { item: 'farmersdelight:beef_stew' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:wixie_charm'
        },
        {
            result: { id: 'ars_nouveau:starbuncle_charm', count: 1 },
            reagent: { item: 'ars_nouveau:starbuncle_shards' },
            pedestalItems: [
                { item: 'minecraft:golden_carrot' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:starbuncle_charm'
        },
        {
            result: { id: 'ars_nouveau:alakarkinos_charm', count: 1 },
            reagent: { item: 'ars_nouveau:alakarkinos_token' },
            pedestalItems: [
                { tag: 'c:gems/prismarine' },
                { item: 'minecraft:nautilus_shell' },
                { item: 'minecraft:nautilus_shell' },
                { item: 'minecraft:nautilus_shell' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:alakarkinos_charm'
        },
        {
            result: { id: 'ars_nouveau:enchanters_sword', count: 1 },
            reagent: { item: 'malum:soul_stained_steel_sword' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: 'ars_nouveau:enchanters_sword'
        },
        {
            result: { id: 'arsdelight:enchanters_knife', count: 1 },
            reagent: { item: 'malum:soul_stained_steel_knife' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: 'arsdelight:enchanters_knife'
        },
        {
            result: { id: 'ars_nouveau:enchanters_gauntlet', count: 1 },
            reagent: { item: 'malum:soulwoven_silk' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:enchanters_gauntlet'
        },
        {
            result: { id: 'geneticsresequenced:dna_helix', count: 4 },
            reagent: { item: 'geneticsresequenced:dna_helix' },
            pedestalItems: [
                { tag: 'c:essences/conjuration' },
                { tag: 'c:essences/manipulation' },
                { tag: 'c:essences/anima' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}dna_helix_cloning`
        },
        {
            result: { id: 'minecraft:heart_of_the_sea', count: 1 },
            reagent: { tag: 'c:storage_blocks/empowered_diamatine' },
            pedestalItems: [
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}heart_of_the_sea`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
