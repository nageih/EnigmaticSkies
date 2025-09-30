ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modularrouters/shaped/';

    const recipes = [
        {
            output: `2x modularrouters:modular_router`,
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: `#c:ingots/ferricore`,
                B: `actuallyadditions:advanced_coil`,
                C: `ars_technica:calibrated_precision_mechanism`,
                D: 'actuallyadditions:iron_casing'
            },
            id: `${id_prefix}modular_router`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
