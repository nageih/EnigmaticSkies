ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            inputs: {
                item: { item: 'actuallyadditions:canola' }
            },
            outputs: {
                fluid_output: { id: 'actuallyadditions:canola_oil', amount: 160 }
            },
            temperature: { min: 273 },
            pressure: 2.0,
            id: `${id_prefix}canola_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 }
            },
            outputs: {
                fluid_output: {
                    id: 'actuallyadditions:refined_canola_oil',
                    amount: 1000
                }
            },
            speed: 0.1,
            temperature: { max: 333, min: 303 },
            id: `${id_prefix}refined_canola_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 },
                item: { item: 'actuallyadditions:crystallized_canola_seed' }
            },
            outputs: {
                fluid_output: {
                    id: 'actuallyadditions:crystallized_oil',
                    amount: 1000
                }
            },
            temperature: { min: 273 },
            id: `${id_prefix}crystallized_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:crystallized_oil', amount: 1000 },
                item: { item: 'actuallyadditions:empowered_canola_seed' }
            },
            outputs: {
                fluid_output: { id: 'actuallyadditions:empowered_oil', amount: 1000 }
            },
            temperature: { min: 273 },
            id: `${id_prefix}empowered_oil`
        },
        {
            inputs: { item: { tag: 'enigmatica:oil_seeds' } },
            outputs: { fluid_output: { id: 'pneumaticcraft:vegetable_oil', amount: 50 } },
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}vegetable_oil_from_seeds`
        },
        {
            inputs: { item: { tag: 'enigmatica:oil_plants' } },
            outputs: { fluid_output: { id: 'pneumaticcraft:vegetable_oil', amount: 20 } },
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}vegetable_oil_from_plants`
        },
        {
            inputs: { item: { item: 'ars_nouveau:frostaya_pod' } },
            outputs: { fluid_output: { id: 'industrialforegoing:ether_gas', amount: 20 } },
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}ether_gas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);
    });
});
