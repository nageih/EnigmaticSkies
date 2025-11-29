ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/altar/';

    const recipes = [
        {
            output: { id: 'occultism:soul_gem' },
            input: { item: 'arsdelight:frostaya_jelly' },
            aura: 15 * 250,
            time: 15,
            id: `${id_prefix}soul_gem`
        },
        {
            output: { id: 'minecraft:coal' },
            input: { item: 'minecraft:charcoal' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 6 * 200,
            time: 6,
            id: `${id_prefix}coal`
        },
        {
            output: { id: 'minecraft:coal_block' },
            input: { item: AlmostUnified.getTagTargetItem(`c:storage_blocks/charcoal`).getId() },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}coal_block`
        },
        {
            output: { id: 'minecraft:quartz' },
            input: { tag: 'c:dusts/quartz' },
            aura: 6 * 50,
            time: 6,
            id: `${id_prefix}quartz`
        },
        {
            output: { id: 'minecraft:sugar', count: 2 },
            input: { item: 'farmersdelight:rice' },
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 2 * 50,
            time: 2,
            id: `${id_prefix}sugar_from_rice`
        },
        {
            output: { id: 'enigmatica:ruby', count: 1 },
            input: { tag: 'c:dusts/ruby' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}ruby`
        },
        {
            output: { id: 'minecraft:emerald', count: 1 },
            input: { tag: 'c:dusts/emerald' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}emerald`
        },
        {
            output: { id: 'minecraft:nether_wart' },
            input: { item: 'occultism:datura' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}nether_wart`
        },
        {
            output: { id: 'malum:hallowed_gold_ingot' },
            input: { tag: 'c:ingots/gold' },
            aura: 15 * 250,
            time: 15,
            id: `${id_prefix}hallowed_gold_ingot`
        },
        {
            output: { id: 'malum:block_of_hallowed_gold' },
            input: { tag: 'c:storage_blocks/gold' },
            aura: 120 * 250,
            time: 120,
            id: `${id_prefix}block_of_hallowed_gold`
        },
        {
            output: { id: 'justdirethings:time_crystal' },
            input: { tag: 'c:gems/ender_crystal' },
            aura: 480 * 250,
            time: 480,
            id: `${id_prefix}time_crystal`
        },
        {
            output: { id: 'minecraft:lily_pad' },
            input: { item: 'farmersdelight:cabbage_leaf' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}lily_pad`
        },
        {
            output: { id: 'arts_and_crafts:lotus_pistils' },
            input: { item: 'ars_elemental:spore_blossom_up' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}lotus_pistils`
        },
        {
            output: { id: 'minecraft:vine' },
            input: { tag: 'c:ropes' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}vine`
        },
        {
            output: { id: 'minecraft:sugar_cane' },
            input: { item: 'minecraft:bamboo' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30 * 200,
            time: 30,
            id: `${id_prefix}sugar_cane`
        },
        {
            output: { id: 'minecraft:ender_pearl' },
            input: { tag: 'c:dusts/grains_of_the_end' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 15 * 200,
            time: 15,
            id: `${id_prefix}ender_pearl`
        },
        {
            output: { id: 'minecraft:amethyst_shard' },
            input: { item: 'enigmatica:calcite_pebble' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 2 * 50,
            time: 2,
            id: `${id_prefix}amethyst_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.aura *= 20;
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
