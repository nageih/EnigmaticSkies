ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/shaped/';

    const recipes = [
        {
            output: `create:electron_tube`,
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:polished_rose_quartz',
                B: '#c:gems/enori',
                C: '#c:gems/restonia'
            },
            id: `${id_prefix}electron_tube`
        },
        {
            output: `create:propeller`,
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:plates/iron'
            },
            id: `${id_prefix}propeller`
        },
        {
            output: `create:whisk`,
            pattern: [' A ', 'BAB', 'BBB'],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:plates/iron'
            },
            id: `${id_prefix}whisk`
        },
        {
            output: `create:mechanical_harvester`,
            pattern: ['ABA', 'ABA', ' C '],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:plates/iron',
                C: 'create:andesite_casing'
            },
            id: `${id_prefix}mechanical_harvester`
        },
        {
            output: `create:mechanical_plough`,
            pattern: ['BBB', 'AAA', ' C '],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:plates/iron',
                C: 'create:andesite_casing'
            },
            id: `${id_prefix}mechanical_plough`
        },
        {
            output: `create:rose_quartz_lamp`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'create:polished_rose_quartz',
                B: 'minecraft:iron_bars',
                C: 'minecraft:glowstone'
            },
            id: `${id_prefix}rose_quartz_lamp`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
