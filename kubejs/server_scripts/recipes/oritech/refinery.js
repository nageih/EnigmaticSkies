ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/refinery/';
    const recipes = [
        {
            results: [],
            fluidOutputs: [
                { fluid: 'modern_industrialization:diesel', amount: 500 },
                { fluid: 'modern_industrialization:naphtha', amount: 500 },
                { fluid: 'modern_industrialization:sulfuric_acid', amount: 500 }
            ],
            ingredients: [{ item: 'oritech:clay_catalyst_beads' }],
            fluidInput: { fluid: 'pneumaticcraft:oil', amount: 1000 },
            time: 120,
            id: `${id_prefix}diesel_from_oil`
        },
        {
            results: [],
            fluidOutputs: [
                { fluid: 'modern_industrialization:heavy_fuel', amount: 500 },
                { fluid: 'modern_industrialization:naphtha', amount: 250 },
                { fluid: 'modern_industrialization:sulfuric_acid', amount: 250 }
            ],
            ingredients: [],
            fluidInput: { fluid: 'pneumaticcraft:oil', amount: 1000 },
            time: 80,
            id: `${id_prefix}heavy_fuel_from_oil`
        },
        {
            results: [],
            fluidOutputs: [
                { fluid: 'modern_industrialization:diesel', amount: 1000 },
                { fluid: 'modern_industrialization:naphtha', amount: 250 },
                { fluid: 'modern_industrialization:sulfuric_acid', amount: 250 }
            ],
            ingredients: [{ item: 'oritech:clay_catalyst_beads' }],
            fluidInput: { fluid: 'modern_industrialization:heavy_fuel', amount: 1000 },
            time: 80,
            id: `${id_prefix}diesel_from_heavy_fuel`
        },

        {
            results: [],
            fluidOutputs: [{ fluid: 'oritech:still_sheol_fire', amount: 200 }],
            ingredients: [{ tag: 'c:gems/blaze_ember' }],
            fluidInput: { fluid: 'minecraft:lava', amount: 1000 },
            time: 80,
            id: `${id_prefix}sheol_fire_from_lava`
        },
        {
            results: [],
            fluidOutputs: [
                { fluid: 'oritech:still_sheol_fire', amount: 500 },
                { fluid: 'oritech:still_strange_matter', amount: 200 }
            ],
            ingredients: [{ item: 'oritech:enderic_compound' }],
            fluidInput: { fluid: 'minecraft:lava', amount: 1000 },
            time: 120,
            id: `${id_prefix}strange_matter_from_lava`
        },
        {
            results: [{ id: 'oritech:reinforced_carbon_sheet' }],
            fluidOutputs: [],
            ingredients: [{ item: 'oritech:carbon_fibre_strands' }],
            fluidInput: { fluid: 'modern_industrialization:naphtha', amount: 500 },
            time: 240,
            id: `${id_prefix}reinforced_carbon_sheet`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
