ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:wixie_charm', count: 1 },
            reagent: { item: 'ars_nouveau:wixie_shards' },
            pedestalItems: [
                { item: 'farmersdelight:beef_stew' },
                { item: 'arsdelight:source_berry_pie_slice' },
                { item: 'arsdelight:source_berry_tea' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:wixie_charm'
        },
        {
            result: { id: 'ars_nouveau:starbuncle_charm', count: 1 },
            reagent: { item: 'ars_nouveau:starbuncle_shards' },
            pedestalItems: [
                { item: 'ars_nouveau:source_berry_roll' },
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
                { item: 'farmersdelight:kelp_roll' },
                { item: 'aether:skyroot_shovel' },
                { item: 'aether:skyroot_bucket' }
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
                { item: 'malum:strange_crystal' },
                { item: 'malum:strange_crystal' },
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
            reagent: { item: 'farmersdelight:rice' },
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
            reagent: { item: 'farmersdelight:rice' },
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
            reagent: { item: 'farmersdelight:rice' },
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
        },
        {
            result: { id: 'aether:enchanted_gravitite', count: 1 },
            reagent: { item: 'naturesaura:infused_stone' },
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { item: 'malum:strange_crystal' },
                { item: 'minecraft:echo_shard' },
                { item: 'malum:strange_crystal' },
                { tag: 'c:essences/air' },
                { item: 'malum:strange_crystal' },
                { item: 'minecraft:echo_shard' },
                { item: 'malum:strange_crystal' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}enchanted_gravitite`
        },
        {
            result: { id: 'ars_technica:mark_of_technomancy', count: 5 },
            reagent: { item: 'ars_nouveau:wilden_tribute' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { tag: 'c:plates/brass' },
                { tag: 'c:gears/energized' },
                { tag: 'c:plates/brass' },
                { tag: 'c:gems/vibrant_crystal' },
                { tag: 'c:plates/brass' },
                { tag: 'c:gears/energized' },
                { tag: 'c:plates/brass' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}mark_of_technomancy`
        },

        {
            result: { id: 'naturesaura:token_joy', count: 4 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/air' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/air' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_joy`
        },
        {
            result: { id: 'naturesaura:token_fear', count: 4 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/earth' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/earth' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_fear`
        },
        {
            result: { id: 'naturesaura:token_anger', count: 4 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/fire' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/fire' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_anger`
        },
        {
            result: { id: 'naturesaura:token_sorrow', count: 4 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/water' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/water' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_sorrow`
        },
        {
            result: { id: 'modern_industrialization:steel_rod_magnetic', count: 1 },
            reagent: { tag: 'c:rods/steel' },
            pedestalItems: [
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}steel_rod_magnetic`
        },
        {
            result: { id: 'modern_industrialization:heatproof_machine_casing', count: 1 },
            reagent: { item: 'modern_industrialization:bronze_machine_casing' },
            pedestalItems: [
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}heatproof_machine_casing`
        },
        {
            result: { id: 'ars_nouveau:shapers_focus', count: 1 },
            reagent: { tag: 'c:essences/manipulation' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/ruby' },
                { tag: 'c:gems/emeradic' },
                { tag: 'c:gems/ruby' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}shapers_focus`
        },
        {
            result: { id: 'ars_nouveau:spell_turret', count: 1 },
            reagent: { item: 'ars_nouveau:basic_spell_turret' },
            pedestalItems: [
                { tag: 'c:storage_blocks/source' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'supplementaries:lumisene_bottle' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}spell_turret`
        },
        {
            result: { id: 'actuallyadditions:atomic_reconstructor', count: 1 },
            reagent: { item: 'actuallyadditions:iron_casing' },
            pedestalItems: [
                { item: 'ars_elemental:manipulation_turret' },
                { item: 'actuallyadditions:lens' },
                { item: 'create:rose_quartz_lamp' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:advanced_coil' },
                { item: 'actuallyadditions:lens' },
                { item: 'create:rose_quartz_lamp' },
                { item: 'actuallyadditions:lens' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}atomic_reconstructor`
        },
        {
            result: { id: 'simplemagnets:basicmagnet', count: 1 },
            reagent: { tag: 'c:gems/enori' },
            pedestalItems: [
                { tag: 'c:gems/palis' },
                { tag: 'c:gems/palis' },
                { tag: 'c:gems/restonia' },
                { tag: 'c:gems/restonia' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 500,
            id: `${id_prefix}basicmagnet`
        },
        {
            result: { id: 'aether:enchanted_berry', count: 1 },
            reagent: { item: 'aether:blue_berry' },
            pedestalItems: [
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 500,
            id: `${id_prefix}enchanted_berry`
        },
        {
            result: { id: 'aether:life_shard', count: 1 },
            reagent: { tag: 'c:gems/ruby' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:essences/anima' },
                { item: 'arsdelight:activated_mendosteen_jam' },
                { tag: 'c:essences/anima' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:essences/anima' },
                { item: 'arsdelight:activated_mendosteen_jam' },
                { tag: 'c:essences/anima' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}life_shard`
        },
        {
            result: { id: 'ars_nouveau:splash_flask_cannon', count: 1 },
            reagent: { item: 'pneumaticcraft:cannon_barrel' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:ingots/hallowed_gold' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'supplementaries:lumisene_bottle' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}splash_flask_cannon`
        },
        {
            result: { id: 'minecraft:trident', count: 1 },
            reagent: { item: 'apothic_enchanting:inert_trident' },
            pedestalItems: [
                { tag: 'c:gems/prismarine' },
                { tag: 'c:gems/prismarine' },
                { tag: 'c:gems/prismarine' },
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:dusts/prismarine' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}trident`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
