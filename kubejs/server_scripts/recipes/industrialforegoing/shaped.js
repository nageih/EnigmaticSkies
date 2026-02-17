ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/shaped/';

    const recipes = [
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'naturesaura:conversion_catalyst',
                C: 'starbunclemania:fluid_jar',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}dissolution_chamber`
        },
        {
            output: 'industrialforegoing:conveyor_extraction_upgrade',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#c:ingots/iron',
                B: 'industrialforegoing:conveyor',
                C: 'minecraft:hopper',
                D: 'pneumaticcraft:plastic'
            },
            id: `${id_prefix}conveyor_extraction_upgrade`
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['DAD', 'ABA', 'DCD'],
            key: {
                A: 'oritech:enderic_lens',
                B: 'modern_industrialization:steel_machine_casing',
                C: 'enigmatica:pulsating_mechanism',
                D: 'pneumaticcraft:plastic'
            },
            id: `${id_prefix}laser_drill`
        },
        {
            output: 'industrialforegoing:stasis_chamber',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'apothic_enchanting:warden_tendril',
                B: 'arsdelight:mendosteen_jelly',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'naturesaura:clock_hand',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}stasis_chamber`
        },
        {
            output: '2x industrialforegoing:fluid_transporter_type',
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: '#c:gems/palis'
            },
            id: `${id_prefix}fluid_transporter_type`
        },
        {
            output: '2x industrialforegoing:item_transporter_type',
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: '#c:gems/enori'
            },
            id: `${id_prefix}item_transporter_type`
        },
        {
            output: '2x industrialforegoing:world_transporter_type',
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: '#c:gems/emeradic'
            },
            id: `${id_prefix}world_transporter_type`
        },
        {
            output: 'industrialforegoing:simulated_hydroponic_bed',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'industrialforegoing:hydroponic_simulation_processor',
                C: 'aquaculture:neptunium_hoe',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'modern_industrialization:large_advanced_motor',
                F: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}simulated_hydroponic_bed`
        },
        {
            output: 'industrialforegoing:enchantment_applicator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:tokens/water',
                C: '#c:storage_blocks/empowered_diamatine',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}enchantment_applicator`
        },
        {
            output: 'industrialforegoing:potion_brewer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:tokens/fire',
                C: '#c:storage_blocks/empowered_restonia',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}potion_brewer`
        },
        {
            output: 'industrialforegoing:enchantment_extractor',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:tokens/air',
                C: '#c:storage_blocks/empowered_void',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}enchantment_extractor`
        },
        {
            output: 'industrialforegoing:material_stonework_factory',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:tokens/earth',
                C: '#c:storage_blocks/empowered_emeradic',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}material_stonework_factory`
        },
        {
            output: 'industrialforegoing:enchantment_sorter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'apothic_enchanting:warden_tendril',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}enchantment_sorter`
        },
        {
            output: 'industrialforegoing:enchantment_factory',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'minecraft:enchanting_table',
                C: 'apothic_enchanting:geode_shelf',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}enchantment_factory`
        },
        {
            output: 'industrialforegoing:fluid_laser_base',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/empowered_palis',
                B: 'starbunclemania:fluid_jar',
                C: 'minecraft:conduit',
                D: 'modern_industrialization:clean_stainless_steel_machine_casing',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}fluid_laser_base`
        },
        {
            output: 'industrialforegoing:infinity_charger',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'modern_industrialization:superconductor_coil',
                C: 'modern_industrialization:clean_stainless_steel_machine_casing',
                D: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}infinity_charger`
        }
    ];

    const simple_machines = [
        { id: 'dye_mixer', item: 'create:whisk' },
        { id: 'spores_recreator', item: 'farmersdelight:organic_compost' },
        { id: 'sewer', item: 'handcrafted:terracotta_wide_pot' },
        { id: 'animal_feeder', item: 'minecraft:golden_carrot' },
        { id: 'animal_baby_separator', item: 'minecraft:iron_bars' },
        { id: 'sludge_refiner', item: 'minecraft:bucket' },
        { id: 'plant_fertilizer', item: 'create:nozzle' },
        { id: 'mob_detector', item: 'minecraft:observer' },
        { id: 'animal_rancher', item: 'minecraft:shears', adv: true },
        { id: 'marine_fisher', item: 'farmersdelight:safety_net', adv: true },
        { id: 'plant_gatherer', item: 'create:mechanical_harvester', adv: true },
        { id: 'plant_sower', item: 'naturesaura:infused_iron_hoe', adv: true },
        { id: 'hydroponic_bed', item: 'farmersdelight:rich_soil', adv: true },
        { id: 'block_placer', item: 'actuallyadditions:placer', adv: true },
        { id: 'block_breaker', item: 'actuallyadditions:breaker', adv: true },
        { id: 'fluid_placer', item: 'actuallyadditions:fluid_placer', adv: true },
        { id: 'fluid_collector', item: 'actuallyadditions:fluid_collector', adv: true }
    ];

    simple_machines.forEach((machine) => {
        let casing = 'actuallyadditions:wood_casing';
        let aux_crystal = '#c:gems/restonia';

        if (machine.adv) {
            casing = 'modern_industrialization:bronze_machine_casing';
            aux_crystal = '#c:gems/empowered_emeradic';
        }

        recipes.push({
            output: `industrialforegoing:${machine.id}`,
            pattern: ['ACA', 'BEB', 'ADA'],
            key: {
                A: '#c:gems/enori',
                B: aux_crystal,
                C: machine.item,
                D: 'oritech:flux_gate',
                E: casing
            },
            id: `${id_prefix}${machine.id}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
