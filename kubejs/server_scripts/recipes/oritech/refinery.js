ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/refinery/';
    const recipes = [
        {
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [
                { fluid: 'oritech:still_diesel', amount: 500 },
                { fluid: 'oritech:still_naphtha', amount: 500 },
                { fluid: 'oritech:still_sulfuric_acid', amount: 500 }
            ],
            ingredients: [{ item: 'oritech:clay_catalyst_beads' }],
            results: [],
            time: 120,
            id: 'oritech:refinery/oilalt'
        },
        {
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [
                { fluid: 'oritech:still_heavy_oil', amount: 500 },
                { fluid: 'oritech:still_naphtha', amount: 250 },
                { fluid: 'oritech:still_sulfuric_acid', amount: 250 }
            ],
            ingredients: [],
            results: [],
            time: 80,
            id: 'oritech:refinery/oilbase'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
