ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            outputs: { fluid_output: { id: 'actuallyadditions:canola_oil', amount: 160 } },
            inputs: { item: { item: 'actuallyadditions:canola' } },
            temperature: { min: 273 },
            pressure: 2.0,
            id: `${id_prefix}canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:refined_canola_oil', amount: 1000 } },
            inputs: { fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 } },
            speed: 0.1,
            temperature: { max: 333, min: 303 },
            id: `${id_prefix}refined_canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:crystallized_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 },
                item: { item: 'actuallyadditions:crystallized_canola_seed' }
            },
            temperature: { min: 273 },
            id: `${id_prefix}crystallized_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:empowered_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:crystallized_oil', amount: 1000 },
                item: { item: 'actuallyadditions:empowered_canola_seed' }
            },
            temperature: { min: 273 },
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
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:salmon_tempura' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { item: 'pneumaticcraft:raw_salmon_tempura' }
            },
            temperature: { min: 423 },
            id: `${id_prefix}salmon_tempura`
        },
        {
            outputs: { item_output: { count: 4, id: 'pneumaticcraft:chips' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { tag: 'c:crops/potato' }
            },
            temperature: { min: 423 },
            id: `${id_prefix}chips`
        },
        {
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:diesel', amount: 1000 },
                item: { tag: 'c:dusts/redstone' }
            },
            temperature: { min: 373 },
            id: `${id_prefix}lubricant`
        },
        {
            outputs: { fluid_output: { amount: 500, id: 'pneumaticcraft:plastic' } },
            inputs: {
                fluid: { amount: 100, fluid: 'modern_industrialization:naphtha' },
                item: { tag: 'c:gems/primal_coal' }
            },
            temperature: { min: 373 },
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
            temperature: { min: 573 },
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
            temperature: { min: 773 },
            id: `${id_prefix}drill_bit_diamond`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);
    });
});
