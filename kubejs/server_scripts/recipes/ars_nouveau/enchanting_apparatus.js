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
                { item: 'aether:blue_berry' },
                { item: 'handcrafted:terracotta_thick_pot' },
                { item: 'handcrafted:terracotta_thick_pot' },
                { item: 'handcrafted:terracotta_thick_pot' }
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
        },
        {
            result: { id: 'naturesaura:furnace_heater', count: 1 },
            reagent: { item: 'aether:golden_amber' },
            pedestalItems: [
                { item: 'naturesaura:infused_stone' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/infused_iron' },
                { item: 'naturesaura:infused_stone' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}furnace_heater`
        },
        {
            result: { id: 'naturesaura:eye', count: 1 },
            reagent: { item: 'aether:golden_amber' },
            pedestalItems: [
                { item: 'minecraft:skeleton_skull' },
                { item: 'malum:strange_crystal' },
                { item: 'naturesaura:infused_slab' },
                { item: 'malum:strange_crystal' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}eye`
        },
        {
            result: { id: 'naturesaura:eye_improved', count: 1 },
            reagent: { item: 'naturesaura:eye' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/air' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}eye_improved`
        },
        {
            result: { id: 'create:blaze_burner', count: 1 },
            reagent: { item: 'create:empty_blaze_burner' },
            pedestalItems: [
                { item: 'minecraft:skeleton_skull' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}blaze_burner`
        },
        {
            result: { id: 'naturesaura:ancient_sapling', count: 1 },
            reagent: { item: 'aether:golden_oak_sapling' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/air' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}ancient_sapling`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:animal' } },
                count: 16
            },
            reagent: { tag: 'c:crops/rice' },
            pedestalItems: [
                { tag: 'c:gems/source' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_animal`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:plant_boost' } },
                count: 16
            },
            reagent: { tag: 'c:crops/rice' },
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_plant_boost`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:cache_recharge' } },
                count: 16
            },
            reagent: { tag: 'c:crops/rice' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_cache_recharge`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
