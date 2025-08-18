ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/mixer/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:sugar_solution', amount: 1000 }],
            item_inputs: [{ tag: 'c:sugars', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            duration: 10,
            eu: 2,
            id: `modern_industrialization:oil/mixer/sugar_solution`
        },
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1000 }],
            item_inputs: [{ tag: 'c:dusts/redstone', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:plant_oil', amount: 1000 }],
            duration: 10,
            eu: 2,
            id: `modern_industrialization:oil/mixer/lubricant_from_plant_oil`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:crystallized_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 }],
            duration: 1,
            eu: 1,
            id: `${id_prefix}crystallized_oil`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:empowered_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:empowered_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            duration: 1,
            eu: 1,
            id: `${id_prefix}empowered_oil`
        },
        {
            item_outputs: [{ item: 'appflux:redstone_crystal', amount: 1 }],
            item_inputs: [
                { tag: 'c:storage_blocks/redstone', amount: 1 },
                { tag: 'c:gems/fluix', amount: 1 },
                { tag: 'c:dusts/glowstone', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000, probability: 0.0 }],
            duration: 5,
            eu: 8,
            id: `${id_prefix}redstone_crystal`
        },
        {
            item_outputs: [{ item: 'justdirethings:time_crystal', amount: 1 }],
            item_inputs: [
                { item: 'justdirethings:time_crystal_block', amount: 1, probability: 0.0 },
                { item: 'minecraft:ghast_tear', amount: 1 }
            ],
            duration: 120,
            eu: 4,
            id: `${id_prefix}time_crystal`
        },
        {
            item_outputs: [{ item: 'oritech:raw_silicon', amount: 3 }],
            fluid_inputs: [{ tag: 'c:water', amount: 1000 }],
            item_inputs: [
                { tag: 'c:sands/colorless', amount: 2 },
                { tag: 'c:dusts/certus_quartz', amount: 4 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}raw_silicon`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            item_inputs: [{ tag: `ae2:${washable}_cable`, amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            item_outputs: [{ item: `ae2:fluix_${washable}_cable`, amount: 1 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                item_inputs: [{ item: `create:${oxide}${type}`, amount: 1 }],
                fluid_inputs: [{ tag: 'c:honey', amount: 1 }],
                item_outputs: [{ item: `create:waxed_${oxide}${type}`, amount: 1 }],
                duration: 5,
                eu: 2,
                id: `${id_prefix}waxed_${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
