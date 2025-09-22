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
            results: [{ id: 'modularrouters:blank_module', count: 12 }],
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'minecraft:paper', count: 3 }
            ],
            pressure: 1.0,
            id: `${id_prefix}blank_module`
        },
        {
            results: [{ id: 'modularrouters:blank_upgrade', count: 8 }],
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:gems/lapis', count: 1 },
                { item: 'minecraft:paper', count: 4 }
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);
    });
});
