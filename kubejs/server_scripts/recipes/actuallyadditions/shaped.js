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
            output: 'actuallyadditions:iron_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:plates/iron',
                B: 'create:electron_tube',
                C: '#c:gems/black_quartz'
            },
            id: `actuallyadditions:iron_casing`
        },
        {
            output: '8x actuallyadditions:empty_cup',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: '#c:gems/black_quartz',
                B: 'handcrafted:white_cup'
            },
            id: `actuallyadditions:empty_cup`
        },
        {
            output: 'actuallyadditions:coffee_machine',
            pattern: [' E ', 'ABA', 'CDC'],
            key: {
                A: 'supplementaries:lumisene_bottle',
                B: 'actuallyadditions:iron_casing',
                C: 'actuallyadditions:emeradic_crystal',
                D: 'handcrafted:terracotta_medium_pot',
                E: 'minecraft:hopper'
            },
            id: `actuallyadditions:coffee_machine`
        },
        {
            output: 'actuallyadditions:canola_press',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:tuff',
                B: 'actuallyadditions:iron_casing',
                C: 'actuallyadditions:basic_coil',
                D: 'actuallyadditions:emeradic_crystal'
            },
            id: `actuallyadditions:canola_press`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
