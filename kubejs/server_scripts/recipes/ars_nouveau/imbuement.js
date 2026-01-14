ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            output: Item.of(
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]'
            ).toJson(),
            input: Ingredient.of(
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
            ).toJson(),
            pedestalItems: [{ item: 'enderio:soul_powder' }, { item: 'minecraft:netherrack' }],
            source: 1000,
            id: `${id_prefix}bottled_ghosts`
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
    const essences = [
        {
            output: 'ars_nouveau:air_essence',
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'c:feathers' }]
        },
        {
            output: 'ars_nouveau:earth_essence',
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }]
        },
        {
            output: 'ars_nouveau:fire_essence',
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }]
        },
        {
            output: 'ars_nouveau:water_essence',
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'minecraft:blue_ice' }]
        },
        {
            output: 'ars_nouveau:manipulation_essence',
            pedestalItems: [{ item: 'minecraft:glow_berries' }, { item: 'actuallyadditions:restonia_crystal' }]
        },
        {
            output: 'ars_nouveau:abjuration_essence',
            pedestalItems: [{ item: 'minecraft:nether_wart' }, { item: 'actuallyadditions:diamatine_crystal' }]
        },
        {
            output: 'ars_nouveau:conjuration_essence',
            pedestalItems: [{ item: 'ars_nouveau:magebloom' }, { item: 'actuallyadditions:palis_crystal' }]
        },
        {
            output: 'ars_elemental:anima_essence',
            pedestalItems: [{ item: 'actuallyadditions:coffee_beans' }, { item: 'actuallyadditions:void_crystal' }]
        }
    ];

    essences.forEach((essence) => {
        recipes.push(
            {
                output: { id: essence.output, count: 1 },
                input: { tag: 'c:gems/source' },
                pedestalItems: essence.pedestalItems,
                source: 2000,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_source_gem`
            },
            {
                output: { id: essence.output, count: 4 },
                input: { tag: 'c:storage_blocks/source' },
                pedestalItems: essence.pedestalItems,
                source: 6000,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_source_block`
            },
            {
                output: { id: essence.output, count: 8 },
                input: { tag: 'c:gems/fluix' },
                pedestalItems: essence.pedestalItems,
                source: 500,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_fluix_gem`
            },
            {
                output: { id: essence.output, count: 16 },
                input: { tag: 'c:storage_blocks/fluix' },
                pedestalItems: essence.pedestalItems,
                source: 1500,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_fluix_block`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
