ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'BBB'],
            key: {
                A: 'minecraft:andesite',
                B: 'minecraft:polished_andesite'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:barrel',
            pattern: ['ABA', 'A A', 'AAA'],
            key: {
                A: '#enigmatica:planks',
                B: '#minecraft:wooden_slabs'
            },
            id: `${id_prefix}barrel`
        },
        {
            output: 'minecraft:smithing_table',
            pattern: ['AAA', 'CBC', 'CCC'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: '#c:storage_blocks/source',
                C: 'ars_nouveau:sourcestone'
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
            output: '3x minecraft:paper',
            pattern: ['AA', 'AB'],
            key: {
                A: 'modern_industrialization:wood_pulp',
                B: '#c:buckets/water'
            },
            id: `${id_prefix}paper`
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
