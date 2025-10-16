ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'minecraft:andesite'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:smithing_table',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: '#enigmatica:planks'
            },
            id: `${id_prefix}smithing_table`
        },
        {
            output: 'minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#enigmatica:planks'
            },
            id: `${id_prefix}chest`
        },
        {
            output: '4x minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefix}chest_from_logs`
        },
        {
            output: 'minecraft:lever',
            pattern: ['A', 'B'],
            key: {
                A: '#c:rods/wooden',
                B: 'aether:holystone'
            },
            id: `${id_prefix}lever`
        },
        {
            output: '3x minecraft:glass_bottle',
            pattern: ['A A', ' A '],
            key: {
                A: 'aether:quicksoil_glass'
            },
            id: `${id_prefix}glass_bottle`
        },
        {
            output: 'minecraft:pumpkin_pie',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'farmersdelight:pumpkin_slice',
                B: '#c:eggs',
                C: '#c:sugars',
                D: 'farmersdelight:pie_crust'
            },
            id: `${id_prefix}pumpkin_pie`
        },
        {
            output: 'minecraft:cake',
            pattern: ['ADA', 'BCB'],
            key: {
                A: '#c:foods/milk',
                B: '#c:sugars',
                C: 'enderio:cake_base',
                D: 'minecraft:sweet_berries'
            },
            id: `${id_prefix}cake`
        },
        {
            output: '16x minecraft:stick',
            pattern: ['A', 'A'],
            key: {
                A: '#enigmatica:crafts_sticks'
            },
            id: `${id_prefix}stick`
        },
        {
            output: 'minecraft:big_dripleaf',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'minecraft:lily_pad',
                B: '#c:essences/manipulation',
                C: 'minecraft:vine'
            },
            id: `${id_prefix}big_dripleaf`
        },
        {
            output: 'minecraft:small_dripleaf',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: 'minecraft:lily_pad',
                B: '#c:essences/manipulation',
                C: 'minecraft:vine'
            },
            id: `${id_prefix}small_dripleaf`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
