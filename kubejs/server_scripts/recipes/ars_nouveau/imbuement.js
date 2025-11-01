ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            output: { id: 'ars_nouveau:air_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'c:feathers' }],
            source: 2000,
            id: `${id_prefix}air_essence`
        },
        {
            output: { id: 'ars_nouveau:air_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'c:feathers' }],
            source: 6000,
            id: `${id_prefix}air_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:earth_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }],
            source: 2000,
            id: `${id_prefix}earth_essence`
        },
        {
            output: { id: 'ars_nouveau:earth_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }],
            source: 6000,
            id: `${id_prefix}earth_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:fire_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }],
            source: 2000,
            id: `${id_prefix}fire_essence`
        },
        {
            output: { id: 'ars_nouveau:fire_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }],
            source: 6000,
            id: `${id_prefix}fire_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:water_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'theurgy:crystallized_water' }],
            source: 2000,
            id: `${id_prefix}water_essence`
        },
        {
            output: { id: 'ars_nouveau:water_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'theurgy:crystallized_water' }],
            source: 6000,
            id: `${id_prefix}water_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:manipulation_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'minecraft:glow_berries' }, { item: 'actuallyadditions:restonia_crystal' }],
            source: 2000,
            id: `${id_prefix}manipulation_essence`
        },
        {
            output: { id: 'ars_nouveau:manipulation_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'minecraft:glow_berries' }, { item: 'actuallyadditions:restonia_crystal' }],
            source: 6000,
            id: `${id_prefix}manipulation_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:abjuration_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'minecraft:nether_wart' }, { item: 'actuallyadditions:diamatine_crystal' }],
            source: 2000,
            id: `${id_prefix}abjuration_essence`
        },
        {
            output: { id: 'ars_nouveau:abjuration_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'minecraft:nether_wart' }, { item: 'actuallyadditions:diamatine_crystal' }],
            source: 6000,
            id: `${id_prefix}abjuration_essence_from_block`
        },
        {
            output: { id: 'ars_nouveau:conjuration_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'ars_nouveau:magebloom' }, { item: 'actuallyadditions:palis_crystal' }],
            source: 2000,
            id: `${id_prefix}conjuration_essence`
        },
        {
            output: { id: 'ars_nouveau:conjuration_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'ars_nouveau:magebloom' }, { item: 'actuallyadditions:palis_crystal' }],
            source: 6000,
            id: `${id_prefix}conjuration_essence_from_block`
        },
        {
            output: { id: 'ars_elemental:anima_essence', count: 1 },
            input: { tag: 'c:gems/source' },
            pedestalItems: [{ item: 'actuallyadditions:coffee_beans' }, { item: 'actuallyadditions:void_crystal' }],
            source: 2000,
            id: `${id_prefix}anima_essence`
        },
        {
            output: { id: 'ars_elemental:anima_essence', count: 4 },
            input: { tag: 'c:storage_blocks/source' },
            pedestalItems: [{ item: 'actuallyadditions:coffee_beans' }, { item: 'actuallyadditions:void_crystal' }],
            source: 6000,
            id: `${id_prefix}anima_essence_from_block`
        },

        {
            output: Item.of(
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]'
            ).toJson(),
            input: Ingredient.of(
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
            ).toJson(),
            pedestalItems: [
                { item: 'actuallyadditions:restonia_crystal' },
                { item: 'enderio:soul_powder' },
                { item: 'minecraft:netherrack' }
            ],
            source: 2000,
            id: `${id_prefix}nether_aura`
        },
        // Glyph removal fixes
        {
            output: { id: 'ars_elemental:acceleration_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:powered_rail' }],
            source: 2000,
            id: `${id_prefix}acceleration_prism_lens`
        },
        {
            output: { id: 'ars_elemental:deceleration_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:cobweb' }],
            source: 2000,
            id: `${id_prefix}deceleration_prism_lens`
        },
        {
            output: { id: 'ars_elemental:arc_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:ender_pearl' }],
            source: 2000,
            id: `${id_prefix}arc_prism_lens`
        },
        {
            output: { id: 'ars_elemental:homing_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'minecraft:ender_eye' }],
            source: 2000,
            id: `${id_prefix}homing_prism_lens`
        },
        {
            output: { id: 'ars_elemental:piercing_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ item: 'ars_nouveau:manipulation_essence' }, { item: 'ars_nouveau:wilden_spike' }],
            source: 2000,
            id: `${id_prefix}piercing_prism_lens`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
