ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:wixie_charm', count: 1 },
            pedestalItems: [
                { item: 'minecraft:brewing_stand' },
                { item: 'arsdelight:source_berry_pie_slice' },
                { item: 'minecraft:crafting_table' },
                { item: 'farmersdelight:beef_stew' }
            ],
            reagent: { item: 'ars_nouveau:wixie_shards' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:wixie_charm'
        },
        {
            result: { id: 'ars_nouveau:starbuncle_charm', count: 1 },
            pedestalItems: [
                { item: 'minecraft:golden_carrot' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' }
            ],
            reagent: { item: 'ars_nouveau:starbuncle_shards' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:starbuncle_charm'
        },
        {
            result: { id: 'ars_nouveau:enchanters_sword', count: 1 },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            reagent: { item: 'malum:soul_stained_steel_sword' },
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: 'ars_nouveau:enchanters_sword'
        },
        {
            result: { id: 'arsdelight:enchanters_knife', count: 1 },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' }
            ],
            reagent: { item: 'malum:soul_stained_steel_knife' },
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: 'arsdelight:enchanters_knife'
        },
        {
            result: { id: 'ars_nouveau:enchanters_gauntlet', count: 1 },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            reagent: { item: 'malum:soulwoven_silk' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:enchanters_gauntlet'
        },
        {
            result: { id: 'geneticsresequenced:dna_helix', count: 4 },
            pedestalItems: [
                { tag: 'c:essences/conjuration' },
                { tag: 'c:essences/manipulation' },
                { tag: 'c:essences/anima' }
            ],
            reagent: { item: 'geneticsresequenced:dna_helix' },
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}dna_helix_cloning`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
