ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            input: { tag: 'c:gems/source' },
            output: { id: 'ars_nouveau:air_essence', count: 1 },
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'aether:moa_eggs' }],
            source: 2000,
            id: `${id_prefix}air_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:air_essence', count: 4 },
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'aether:moa_eggs' }],
            source: 6000,
            id: `${id_prefix}air_essence_from_block`
        },
        {
            input: { tag: 'c:gems/source' },
            output: { id: 'ars_nouveau:earth_essence', count: 1 },
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }],
            source: 2000,
            id: `${id_prefix}earth_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:earth_essence', count: 4 },
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }],
            source: 6000,
            id: `${id_prefix}earth_essence_from_block`
        },
        {
            input: { tag: 'c:gems/source' },
            output: { id: 'ars_nouveau:fire_essence', count: 1 },
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }],
            source: 2000,
            id: `${id_prefix}fire_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:fire_essence', count: 4 },
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }],
            source: 6000,
            id: `${id_prefix}fire_essence_from_block`
        },
        {
            input: { tag: 'c:gems/source' },
            output: { id: 'ars_nouveau:water_essence', count: 1 },
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'theurgy:crystallized_water' }],
            source: 2000,
            id: `${id_prefix}water_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:water_essence', count: 4 },
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'theurgy:crystallized_water' }],
            source: 6000,
            id: `${id_prefix}water_essence_from_block`
        },

        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:manipulation_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:stone_button' },
                { item: 'minecraft:redstone' },
                { item: 'minecraft:clock' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}manipulation_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:abjuration_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:fermented_spider_eye' },
                { item: 'minecraft:sugar' },
                { item: 'minecraft:milk_bucket' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}abjuration_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:conjuration_essence', count: 4 },
            pedestalItems: [
                { item: 'ars_nouveau:wilden_horn' },
                { item: 'ars_nouveau:starbuncle_shards' },
                { item: 'minecraft:book' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}conjuration_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_elemental:anima_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:wither_skeleton_skull' },
                { item: 'minecraft:bone_meal' },
                { item: 'minecraft:golden_apple' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}anima_essence`
        },
        {
            input: { tag: 'c:storage_blocks/amethyst' },
            output: { id: 'ars_nouveau:source_gem_block', count: 1 },
            pedestalItems: [],
            source: 500 * 3,
            id: `ars_nouveau:amethyst_block`
        },

        // Glyph removal fixes
        {
            input: { tag: 'c:gems/quartz' },
            output: { id: 'ars_elemental:acceleration_prism_lens', count: 1 },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:powered_rail' }],
            source: 2000,
            id: 'ars_elemental:acceleration_prism_lens'
        },
        {
            input: { tag: 'c:gems/quartz' },
            output: { id: 'ars_elemental:deceleration_prism_lens', count: 1 },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:cobweb' }],
            source: 2000,
            id: 'ars_elemental:deceleration_prism_lens'
        },
        {
            input: { tag: 'c:gems/quartz' },
            output: { id: 'ars_elemental:arc_prism_lens', count: 1 },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:ender_pearl' }],
            source: 2000,
            id: 'ars_elemental:arc_prism_lens'
        },
        {
            input: { tag: 'c:gems/quartz' },
            output: { id: 'ars_elemental:homing_prism_lens', count: 1 },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:ender_eye' }],
            source: 2000,
            id: 'ars_elemental:homing_prism_lens'
        },
        {
            input: { tag: 'c:gems/quartz' },
            output: { id: 'ars_elemental:piercing_prism_lens', count: 1 },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'ars_nouveau:wilden_spike' }],
            source: 2000,
            id: 'ars_elemental:piercing_prism_lens'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
