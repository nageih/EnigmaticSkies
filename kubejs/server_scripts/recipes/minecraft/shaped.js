ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:tuff',
                B: 'minecraft:iron_trapdoor'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:smoker',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: '#enigmatica:planks',
                B: 'minecraft:furnace',
                C: '#minecraft:logs'
            },
            id: `${id_prefix}smoker`
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: '#c:ingots/dark_steel',
                B: 'minecraft:furnace',
                C: 'minecraft:tuff_bricks'
            },
            id: `${id_prefix}blast_furnace`
        },
        {
            output: 'minecraft:grindstone',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#c:rods/wooden',
                B: 'minecraft:polished_tuff_slab',
                C: '#enigmatica:planks'
            },
            id: `${id_prefix}grindstone`
        },
        {
            output: 'minecraft:cauldron',
            pattern: ['A A', 'A A', 'ABA'],
            key: {
                A: '#c:ingots/dark_steel',
                B: '#c:nuggets/dark_steel'
            },
            id: `${id_prefix}cauldron`
        },
        {
            output: 'minecraft:composter',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: '#enigmatica:planks',
                B: 'actuallyadditions:worm',
                C: 'farmersdelight:organic_compost'
            },
            id: `${id_prefix}composter`
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
            output: 'minecraft:stonecutter',
            pattern: [' A ', 'BBB'],
            key: {
                A: '#c:gears/stone',
                B: 'minecraft:tuff'
            },
            id: `${id_prefix}stonecutter`
        },
        {
            output: 'minecraft:lectern',
            pattern: ['AAA', ' B ', ' A '],
            key: {
                A: '#minecraft:wooden_slabs',
                B: 'minecraft:bookshelf'
            },
            id: `${id_prefix}lectern`
        },
        {
            output: 'minecraft:brewing_stand',
            pattern: [' A ', ' B ', 'CCC'],
            key: {
                A: 'minecraft:iron_trapdoor',
                B: '#c:rods/iron',
                C: 'minecraft:polished_tuff_slab'
            },
            id: `${id_prefix}brewing_stand`
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
