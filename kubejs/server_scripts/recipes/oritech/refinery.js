ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/refinery/';
    const recipes = [
        {
            results: [],
            fluidOutputs: [
                { fluid: 'modern_industrialization:light_fuel', amount: 500 },
                { fluid: 'modern_industrialization:heavy_fuel', amount: 200 },
                { fluid: 'modern_industrialization:naphtha', amount: 300 }
            ],
            ingredients: [],
            fluidInput: { fluid: 'pneumaticcraft:oil', amount: 1000 },
            time: 6,
            id: `${id_prefix}oil_processing`
        },

        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_sheol_fire', amount: 250 }],
            ingredients: [{ item: 'ars_nouveau:bombegranate_pod' }],
            fluidInput: { fluid: 'minecraft:lava', amount: 1000 },
            time: 4,
            id: `${id_prefix}sheol_fire_from_lava`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_strange_matter', amount: 200 }],
            ingredients: [{ item: 'malum:strange_crystal' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 1000 },
            time: 6,
            id: `${id_prefix}strange_matter_from_strange_crystal`
        },
        {
            results: [{ id: 'oritech:reinforced_carbon_sheet' }],
            fluidOutputs: [],
            ingredients: [{ item: 'oritech:carbon_fibre_strands' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 500 },
            time: 12,
            id: `${id_prefix}reinforced_carbon_sheet`
        },
        {
            results: [{ id: 'oritech:adamant_ingot' }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:storage_blocks/diamond' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 12,
            id: `${id_prefix}adamant_ingot`
        },
        {
            results: [{ id: 'minecraft:netherite_scrap' }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:dusts/netherite_scrap' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 2000 },
            time: 12,
            id: `${id_prefix}netherite_scrap`
        },
        {
            results: [{ id: 'oritech:energite_ingot' }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:storage_blocks/fluxite' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 12,
            id: `${id_prefix}energite_ingot`
        },
        {
            results: [{ id: 'malum:cthonic_gold', count: 4 }],
            fluidOutputs: [],
            ingredients: [{ tag: 'c:storage_blocks/hallowed_gold' }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            time: 12,
            id: `${id_prefix}cthonic_gold`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_fuel', amount: 1000 }],
            ingredients: [{ tag: 'c:gems/fluxite' }],
            fluidInput: { fluid: 'justdirethings:refined_t2_fluid_source', amount: 1000 },
            time: 10,
            id: `${id_prefix}still_fuel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:refinery';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
