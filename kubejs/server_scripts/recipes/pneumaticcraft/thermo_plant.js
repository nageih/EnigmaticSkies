ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            outputs: { fluid_output: { id: 'actuallyadditions:canola_oil', amount: 160 } },
            inputs: { item: { item: 'actuallyadditions:canola' } },
            temperature: { min: CtoK(0) },
            pressure: 2.0,
            id: `${id_prefix}canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:refined_canola_oil', amount: 2000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 },
                item: { item: 'theurgy:fermentation_starter' }
            },
            temperature: { min: CtoK(30), max: CtoK(100) },
            id: `${id_prefix}refined_canola_oil_with_fermentation_starter`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:refined_canola_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 }
            },
            temperature: { min: CtoK(30), max: CtoK(100) },
            id: `${id_prefix}refined_canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:crystallized_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 },
                item: { item: 'actuallyadditions:crystallized_canola_seed' }
            },
            temperature: { min: CtoK(0) },
            id: `${id_prefix}crystallized_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:empowered_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:crystallized_oil', amount: 1000 },
                item: { item: 'actuallyadditions:empowered_canola_seed' }
            },
            temperature: { min: CtoK(0) },
            id: `${id_prefix}empowered_oil`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:ether_gas', amount: 60 } },
            inputs: { item: { item: 'ars_nouveau:frostaya_pod' } },
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}ether_gas`
        },
        {
            outputs: { fluid_output: { id: 'supplementaries:lumisene', amount: 125 } },
            inputs: { item: { item: 'minecraft:glow_berries' } },
            pressure: 1.0,
            temperature: { min: CtoK(0) },
            id: `${id_prefix}lumisene`
        },
        {
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:salmon_tempura' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { item: 'pneumaticcraft:raw_salmon_tempura' }
            },
            temperature: { min: CtoK(150) },
            id: `${id_prefix}salmon_tempura`
        },
        {
            outputs: { item_output: { count: 4, id: 'pneumaticcraft:chips' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { tag: 'c:crops/potato' }
            },
            temperature: { min: CtoK(150) },
            id: `${id_prefix}chips`
        },
        {
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:diesel', amount: 1000 },
                item: { tag: 'c:dusts/redstone' }
            },
            temperature: { min: CtoK(100) },
            id: `${id_prefix}lubricant`
        },
        {
            outputs: { fluid_output: { amount: 500, id: 'pneumaticcraft:plastic' } },
            inputs: {
                fluid: { amount: 100, fluid: 'modern_industrialization:naphtha' },
                item: { tag: 'c:gems/primal_coal' }
            },
            temperature: { min: CtoK(100) },
            id: `${id_prefix}plastic`
        },
        {
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:drill_bit_iron' } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 2000 },
                item: { tag: 'c:ingots/iron' }
            },
            air_use_multiplier: 2.0,
            pressure: 3.0,
            speed: 0.5,
            id: `${id_prefix}drill_bit_iron`
        },
        {
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:drill_bit_compressed_iron' } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 4000 },
                item: { tag: 'c:ingots/compressed_iron' }
            },
            air_use_multiplier: 5.0,
            pressure: 4.0,
            speed: 0.25,
            temperature: { min: CtoK(200) },
            id: `${id_prefix}drill_bit_compressed_iron`
        },
        {
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:drill_bit_diamond' } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 8000 },
                item: { tag: 'c:storage_blocks/diamond' }
            },
            air_use_multiplier: 10.0,
            pressure: 7.5,
            speed: 0.1,
            temperature: { min: CtoK(500) },
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:latex', amount: 60 } },
            inputs: { item: { item: 'minecraft:dandelion' } },
            pressure: 4.0,
            temperature: { min: CtoK(100) },
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:latex', amount: 120 } },
            inputs: { item: { item: 'minecraft:vine' } },
            pressure: 4.0,
            temperature: { min: CtoK(100) },
            id: `${id_prefix}latex_from_vine`
        },
        {
            outputs: { item_output: { count: 1, id: 'oritech:reinforced_carbon_sheet' } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:naphtha', amount: 500 },
                item: { item: 'oritech:carbon_fibre_strands' }
            },
            pressure: 7.5,
            temperature: { min: CtoK(500) },
            speed: 0.1,
            id: `${id_prefix}reinforced_carbon_sheet`
        },
        {
            outputs: { item_output: { id: 'pneumaticcraft:advanced_pressure_tube', count: 1 } },
            inputs: {
                fluid: { tag: 'pneumaticcraft:plastic', amount: 50 },
                item: { item: 'pneumaticcraft:reinforced_pressure_tube' }
            },
            pressure: 7.5,
            id: `${id_prefix}advanced_pressure_tube`
        },
        {
            outputs: { item_output: { id: 'create:sturdy_sheet', count: 1 } },
            inputs: {
                fluid: { tag: 'c:lava', amount: 500 },
                item: { tag: 'c:dusts/obsidian' }
            },
            pressure: 7.5,
            id: `${id_prefix}sturdy_sheet`
        },
        {
            outputs: { fluid_output: { id: 'minecraft:water', amount: 8000 } },
            inputs: { item: { item: 'theurgy:crystallized_water' } },
            pressure: 1.0,
            temperature: { min: CtoK(0) },
            speed: 2.0,
            id: `${id_prefix}water`
        },
        {
            outputs: { fluid_output: { id: 'minecraft:lava', amount: 4000 } },
            inputs: { item: { item: 'theurgy:crystallized_lava' } },
            pressure: 1.0,
            temperature: { min: CtoK(0) },
            speed: 2.0,
            id: `${id_prefix}lava`
        },
        {
            outputs: { fluid_output: { id: 'enigmatica:espresso', amount: 250 } },
            inputs: {
                fluid: { fluid: 'minecraft:water', amount: 250 },
                item: { item: 'actuallyadditions:coffee_beans' }
            },
            pressure: 9.0,
            temperature: { min: CtoK(90), max: CtoK(96) },
            speed: 1.0,
            id: `${id_prefix}espresso`
        },
        {
            outputs: { item_output: { id: 'actuallyadditions:coffee_cup', count: 1 } },
            inputs: {
                fluid: { fluid: 'enigmatica:espresso', amount: 50 },
                item: { item: 'actuallyadditions:empty_cup' }
            },
            temperature: { min: CtoK(0) },
            speed: 2.0,
            id: `${id_prefix}coffee_cup`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
