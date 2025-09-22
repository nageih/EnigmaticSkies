ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/pressure_chamber/';

    const recipes = [
        {
            inputs: [{ tag: 'c:storage_blocks/coal', count: 1 }],
            results: [{ id: 'minecraft:diamond', count: 1 }],
            pressure: 4.0,
            id: `pneumaticcraft:pressure_chamber/coal_to_diamond`
        },
        {
            inputs: [{ tag: 'c:storage_blocks/ferricore', count: 1 }],
            results: [{ id: 'pneumaticcraft:compressed_iron_block', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_block`
        },
        {
            inputs: [{ tag: 'c:ingots/ferricore', count: 1 }],
            results: [{ id: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_ingot`
        },
        {
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'minecraft:paper', count: 3 }
            ],
            results: [{ id: 'modularrouters:blank_module', count: 12 }],
            pressure: 1.0,
            id: `${id_prefix}blank_module`
        },
        {
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:gems/lapis', count: 1 },
                { item: 'minecraft:paper', count: 4 }
            ],
            results: [{ id: 'modularrouters:blank_upgrade', count: 8 }],
            pressure: 1.0,
            id: `${id_prefix}blank_upgrade`
        },
        {
            inputs: [
                { item: 'minecraft:snow_block', count: 1 },
                { tag: 'c:buckets/empty', count: 1 }
            ],
            results: [{ id: 'minecraft:powder_snow_bucket', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}powder_snow_bucket`
        },
        {
            inputs: [{ item: 'naturesaura:bottle_two_the_rebottling', count: 1 }],
            results: [{ id: 'naturesaura:vacuum_bottle', count: 1 }],
            pressure: -0.75,
            id: `${id_prefix}vacuum_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);
    });
});
