ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [],
            ingredients: [{ item: 'oritech:fluxite' }],
            fluidInput: { fluid: '#c:fuels/crude_oil', amount: 1000 },
            fluidOutputs: [{ fluid: 'oritech:still_fuel', amount: 1000 }],
            time: 200,
            id: `${id_prefix}still_fuel_from_oil`
        },
        {
            results: [{ count: 1, id: 'oritech:polymer_resin' }],
            ingredients: [{ tag: 'minecraft:sand' }],
            fluidInput: { fluid: '#c:fuels/crude_oil', amount: 1000 },
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
            time: 5,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    event.forEachRecipe({ type: 'oritech:centrifuge_fluid' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.results) {
            console.log(recipe.results[0].id);
        }

        // if (recipe_id.includes('_random_animal_')) {
        //     recipe.item_to_use = { item: 'minecraft:egg' };
        //     recipe.id = recipe_id;
        // }

        if (recipe.id) {
            recipes.push(recipe);
        }
    });

    // let materials = [
    //     { primary: 'iron' },
    //     { primary: 'copper' },
    //     { primary: 'gold' },
    //     { primary: 'osmium' },
    //     { primary: 'iesnium' },
    //     { primary: 'iridium' },
    //     { primary: 'lead' },
    //     { primary: 'silver' },
    //     { primary: 'nickel' },
    //     { primary: 'tin' },
    //     { primary: 'aluminum' },
    //     { primary: 'platinum' },
    //     { primary: 'uranium' },
    //     { primary: 'zinc' }
    // ];

    // materials.forEach((material) => {
    //     recipes.push(
    //         {
    //             results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 2 }],
    //             ingredients: [{ tag: `c:clumps/${material.primary}` }],
    //             fluidInput: { fluid: 'minecraft:water', amount: 1000 },
    //             fluidOutputs: [],
    //             time: 300,
    //             id: `${id_prefix}clump_${material.primary}`
    //         },
    //         {
    //             results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 3 }],
    //             ingredients: [{ tag: `c:clumps/${material.primary}` }],
    //             fluidInput: { fluid: 'oritech:still_sulfuric_acid', amount: 1000 },
    //             fluidOutputs: [{ fluid: 'oritech:still_mineral_slurry', amount: 250 }],
    //             time: 300,
    //             id: `${id_prefix}clump_acid_${material.primary}`
    //         }
    //     );
    // });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
