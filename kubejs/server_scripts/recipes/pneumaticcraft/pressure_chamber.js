ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/pressure_chamber/';

    const recipes = [
        {
            results: [{ id: 'minecraft:diamond', count: 1 }],
            inputs: [{ tag: 'c:storage_blocks/coal', count: 1 }],
            pressure: 4.0,
            id: `pneumaticcraft:pressure_chamber/coal_to_diamond`
        },
        {
            results: [{ id: 'pneumaticcraft:compressed_iron_block', count: 1 }],
            inputs: [{ tag: 'c:storage_blocks/ferricore', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_block`
        },
        {
            results: [{ id: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            inputs: [{ tag: 'c:ingots/ferricore', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_ingot`
        },
        {
            results: [{ id: 'modularrouters:blank_module', count: 3 }],
            inputs: [
                { item: 'prettypipes:blank_module', count: 1 },
                { tag: 'c:gems/empowered_restonia', count: 1 },
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { item: 'modern_industrialization:analog_circuit', count: 3 }
            ],
            pressure: 1.0,
            id: `${id_prefix}blank_module`
        },
        {
            results: [{ id: 'modularrouters:blank_upgrade', count: 3 }],
            inputs: [
                { item: 'prettypipes:blank_module', count: 1 },
                { tag: 'c:gems/empowered_palis', count: 1 },
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { item: 'modern_industrialization:analog_circuit', count: 3 }
            ],
            pressure: 1.0,
            id: `${id_prefix}blank_upgrade`
        },
        {
            results: [{ id: 'minecraft:powder_snow_bucket', count: 1 }],
            inputs: [
                { item: 'minecraft:snow_block', count: 1 },
                { tag: 'c:buckets/empty', count: 1 }
            ],
            pressure: 1.0,
            id: `${id_prefix}powder_snow_bucket`
        },
        {
            results: [{ id: 'naturesaura:vacuum_bottle', count: 1 }],
            inputs: [{ item: 'naturesaura:bottle_two_the_rebottling', count: 1 }],
            pressure: -0.75,
            id: `${id_prefix}vacuum_bottle`
        },
        {
            results: [
                { id: 'ae2:formation_core', count: 2 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:neutralized_frostaya_jam', count: 1 },
                { item: 'malum:anomalous_design', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}formation_core`
        },
        {
            results: [
                { id: 'ae2:annihilation_core', count: 2 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:neutralized_bombegrante_jam', count: 1 },
                { item: 'malum:anomalous_design', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}annihilation_core`
        },
        {
            results: [
                { id: 'replication:matter_network_pipe', count: 3 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:activated_mendosteen_jam', count: 1 },
                { item: 'prettypipes:pipe', count: 3 }
            ],
            pressure: 4.0,
            id: `${id_prefix}matter_network_pipe`
        },
        {
            results: [
                { id: 'replication:replication_terminal', count: 1 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:activated_mendosteen_jam', count: 1 },
                { item: 'supplementaries:crystal_display', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}replication_terminal`
        },
        {
            results: [{ id: 'enderio:frank_n_zombie', count: 1 }],
            inputs: [
                { item: 'malum:fused_consciousness', count: 1 },
                { item: 'enderio:z_logic_controller', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}frank_n_zombie`
        },
        {
            results: [{ id: 'enderio:sentient_ender', count: 1 }],
            inputs: [
                { item: 'malum:fused_consciousness', count: 1 },
                { item: 'enderio:ender_resonator', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}sentient_ender`
        },
        {
            results: [{ id: 'oritech:machine_core_2', count: 4 }],
            inputs: [
                { item: 'industrialforegoing:machine_frame_simple', count: 1 },
                { item: 'enderio:pulsating_crystal', count: 8 },
                { tag: 'c:gems/diamatine', count: 8 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_2`
        },
        {
            results: [{ id: 'oritech:machine_core_4', count: 1 }],
            inputs: [
                { item: 'oritech:machine_core_2', count: 1 },
                { item: 'oritech:reinforced_carbon_sheet', count: 2 },
                { tag: 'c:plates/obsidian', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_4`
        },
        {
            results: [{ id: 'modern_industrialization:lubricant_bucket', count: 1 }],
            inputs: [
                { item: 'justdirethings:polymorphic_fluid_bucket', count: 1 },
                { tag: 'c:dusts/grains_of_infinity', count: 2 },
                { tag: 'c:dusts/redstone', count: 2 },
                { item: 'ars_nouveau:starbuncle_charm', count: 4 }
            ],
            pressure: 1.0,
            id: `${id_prefix}lubricant_bucket`
        },
        {
            results: [{ id: 'modern_industrialization:conductive_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/conductive_alloy', count: 3 },
                { item: 'modern_industrialization:rubber_sheet', count: 12 }
            ],
            pressure: 4.0,
            id: `${id_prefix}conductive_cable`
        },
        {
            results: [{ id: 'modern_industrialization:energetic_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/energetic_alloy', count: 3 },
                { item: 'modern_industrialization:rubber_sheet', count: 12 }
            ],
            pressure: 4.0,
            id: `${id_prefix}energetic_cable`
        },
        {
            results: [{ id: 'modern_industrialization:vibrant_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/vibrant_alloy', count: 3 },
                { item: 'pneumaticcraft:plastic', count: 12 }
            ],
            pressure: 4.0,
            id: `${id_prefix}vibrant_cable`
        },
        {
            results: [{ id: 'modern_industrialization:superconductor_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/sky', count: 3 },
                { item: 'pneumaticcraft:plastic', count: 12 },
                { item: 'modern_industrialization:cooling_cell', count: 3 }
            ],
            pressure: 4.0,
            id: `${id_prefix}superconductor_cable`
        },
        {
            results: [{ id: 'pneumaticcraft:transistor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:conductive_cable', count: 3 },
                { tag: 'c:nuggets/redstone_alloy', count: 3 },
                { item: 'modern_industrialization:rubber_sheet', count: 3 }
            ],
            pressure: 4.0,
            id: `${id_prefix}transistor`
        },
        {
            results: [{ id: 'enderio:basic_capacitor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:conductive_cable', count: 2 },
                { tag: 'c:dusts/grains_of_infinity', count: 3 },
                { tag: 'c:plates/iron', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}basic_capacitor`
        },
        {
            results: [{ id: 'enderio:double_layer_capacitor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:energetic_cable', count: 2 },
                { item: 'enderio:basic_capacitor', count: 2 },
                { tag: 'c:plates/copper', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}double_layer_capacitor`
        },
        {
            results: [{ id: 'enderio:octadic_capacitor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:vibrant_cable', count: 2 },
                { item: 'enderio:double_layer_capacitor', count: 2 },
                { tag: 'c:plates/carbon', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}octadic_capacitor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
