ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shaped/';

    const recipes = [
        {
            output: 'actuallyadditions:wood_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#enigmatica:planks',
                B: 'farmersdelight:canvas',
                C: 'create:cogwheel'
            },
            id: `${id_prefix}wood_casing`
        },
        {
            output: 'actuallyadditions:iron_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:plates/iron',
                B: 'create:electron_tube',
                C: '#c:gears/copper'
            },
            id: `${id_prefix}iron_casing`
        },
        {
            output: '8x actuallyadditions:empty_cup',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: '#c:gems/black_quartz',
                B: 'handcrafted:white_cup'
            },
            id: `${id_prefix}empty_cup`
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
            id: `${id_prefix}coffee_machine`
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
            id: `${id_prefix}canola_press`
        },
        {
            output: 'actuallyadditions:ranged_collector',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#c:gems/void',
                B: 'aether:enchanted_gravitite',
                C: 'minecraft:hopper'
            },
            id: `${id_prefix}ranged_collector`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
