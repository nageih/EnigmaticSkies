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

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
