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
            pattern: ['AB', 'DE', 'CC'],
            key: {
                A: 'minecraft:tinted_glass',
                B: 'minecraft:hopper',
                C: '#c:gems/enori',
                D: 'actuallyadditions:empty_cup',
                E: 'actuallyadditions:iron_casing'
            },
            id: `${id_prefix}coffee_machine`
        },
        {
            output: 'actuallyadditions:farmer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'minecraft:iron_hoe',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'actuallyadditions:iron_casing',
                E: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}farmer`
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
        },
        {
            output: 'actuallyadditions:advanced_coil',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#c:nuggets/hallowed_gold',
                B: '#c:gems/void',
                C: 'actuallyadditions:basic_coil'
            },
            id: `${id_prefix}advanced_coil`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
