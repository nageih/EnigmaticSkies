ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shaped/';

    const recipes = [
        {
            output: '2x actuallyadditions:rice_dough',
            pattern: ['AA', 'A '],
            key: {
                A: '#c:crops/rice'
            },
            id: `actuallyadditions:rice_dough`
        },
        {
            output: '3x minecraft:paper',
            pattern: ['A  ', ' A ', '  A'],
            key: {
                A: '#c:crops/rice'
            },
            id: `actuallyadditions:rice_paper`
        },
        {
            output: 'actuallyadditions:wood_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#enigmatica:planks',
                B: 'farmersdelight:canvas',
                C: '#minecraft:logs_that_burn'
            },
            id: `actuallyadditions:wood_casing`
        },
        {
            output: '8x actuallyadditions:empty_cup',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: '#c:gems/black_quartz',
                B: 'handcrafted:white_cup'
            },
            id: `actuallyadditions:empty_cup`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
