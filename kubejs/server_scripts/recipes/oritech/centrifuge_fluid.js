ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [],
            ingredients: [{ item: 'oritech:fluxite' }],
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [{ fluid: 'oritech:still_fuel', amount: 1000 }],
            time: 200,
            id: `${id_prefix}still_fuel_from_oil`
        },
        {
            results: [{ count: 1, id: 'oritech:polymer_resin' }],
            ingredients: [{ tag: 'minecraft:sand' }],
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [],
            time: 200,
            id: `${id_prefix}polymer_resin_from_oil`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInput: { fluid: 'minecraft:water', amount: 100 },
            fluidOutputs: [],
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 40,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    const materials = [
        { primary: 'nickel', secondary: 'oritech:clay_catalyst_beads' },
        { primary: 'zinc', secondary: 'oritech:raw_silicon' },
        { primary: 'copper', secondary: 'createsifter:raw_silver_piece' },
        { primary: 'gold', secondary: AlmostUnified.getTagTargetItem(`c:dusts/salt`).getId() },
        { primary: 'iron', secondary: 'createsifter:raw_tin_piece' }
    ];

    materials.forEach((material) => {
        recipes.push(
            {
                fluidInput: { fluid: 'minecraft:water', amount: 1000 },
                fluidOutputs: [],
                ingredients: [{ tag: `c:clumps/${material.primary}` }],
                results: [
                    { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.primary}`).getId(), count: 18 },
                    { id: material.secondary, count: 2 }
                ],
                time: 150,
                id: `${id_prefix}clump_water_${material.primary}`
            },
            {
                fluidInput: { fluid: 'oritech:still_sulfuric_acid', amount: 1000 },
                fluidOutputs: [{ fluid: 'oritech:still_mineral_slurry', amount: 250 }],
                ingredients: [{ tag: `c:clumps/${material.primary}` }],
                results: [
                    { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.primary}`).getId(), count: 27 },
                    { id: material.secondary, count: 3 }
                ],
                time: 150,
                id: `${id_prefix}clump_acid_${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
