ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/shaped/';

    const recipes = [
        {
            output: '4x farmersdelight:pie_crust',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:flours/wheat',
                B: '#c:foods/milk'
            },
            id: `${id_prefix}pie_crust`
        },
        {
            output: 'farmersdelight:apple_pie',
            pattern: ['AAA', 'AAA', 'BCB'],
            key: {
                A: 'minecraft:apple',
                B: '#c:sugars',
                C: 'farmersdelight:pie_crust'
            },
            id: `${id_prefix}apple_pie`
        },
        {
            output: '2x farmersdelight:chocolate_pie',
            pattern: ['BAB'],
            key: {
                A: 'create:chocolate_bucket',
                B: 'farmersdelight:pie_crust'
            },
            id: `${id_prefix}chocolate_pie`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
