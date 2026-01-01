ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/refinery/';
    const recipes = [
        {
            results: [],
            fluidOutputs: [
                { fluid: 'enigmatica:light_oil', amount: 500 },
                { fluid: 'enigmatica:heavy_oil', amount: 300 },
                { fluid: 'enigmatica:pitch', amount: 200 }
            ],
            ingredients: [],
            fluidInput: { fluid: 'pneumaticcraft:oil', amount: 1000 },
            time: 4,
            id: `${id_prefix}oil_processing`
        },
        {
            results: [{ id: 'oritech:reinforced_carbon_sheet' }],
            fluidOutputs: [],
            ingredients: [{ item: 'oritech:carbon_fibre_strands' }],
            fluidInput: { fluid: 'pneumaticcraft:plastic', amount: 500 },
            time: 4,
            id: `${id_prefix}reinforced_carbon_sheet`
        },
        {
            results: [{ id: 'create:sturdy_sheet' }],
            fluidOutputs: [],
            ingredients: [{ item: 'create:powdered_obsidian' }],
            fluidInput: { fluid: 'minecraft:lava', amount: 500 },
            time: 1,
            id: `${id_prefix}sturdy_sheet`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_fuel', amount: 1000 }],
            ingredients: [{ tag: 'c:gems/amethyst' }],
            fluidInput: { fluid: 'justdirethings:refined_t2_fluid_source', amount: 1000 },
            time: 10,
            id: `${id_prefix}still_fuel`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'pneumaticcraft:plastic', amount: 500 }],
            ingredients: [{ tag: 'c:gems/primal_coal' }],
            fluidInput: { fluid: 'enigmatica:light_oil', amount: 100 },
            time: 2,
            id: `${id_prefix}plastic`
        },
        {
            results: [{ id: 'minecraft:bowl' }],
            fluidOutputs: [{ fluid: 'oritech:still_sheol_fire', amount: 1000 }],
            ingredients: [{ item: 'arsdelight:bombegrante_jelly' }],
            fluidInput: { fluid: 'minecraft:lava', amount: 1000 },
            time: 2,
            id: `${id_prefix}sheol_fire_from_lava`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_strange_matter', amount: 1000 }],
            ingredients: [{ item: 'malum:strange_crystal' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 2,
            id: `${id_prefix}strange_matter_from_strange_crystal`
        },
        {
            results: [{ id: 'minecraft:netherite_scrap' }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:dusts/netherite_scrap' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 2,
            id: `${id_prefix}netherite_scrap`
        },
        {
            results: [{ id: 'malum:cthonic_gold', count: 4 }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:storage_blocks/hallowed_gold' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 2,
            id: `${id_prefix}cthonic_gold`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:refinery';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
