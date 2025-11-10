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
            pattern: ['BA', 'DE', 'CC'],
            key: {
                A: 'supplementaries:lumisene_bottle',
                B: 'minecraft:hopper',
                C: '#c:gems/enori',
                D: 'actuallyadditions:coffee_cup',
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
        },
        {
            output: 'actuallyadditions:empowerer',
            pattern: [' A ', 'ABA'],
            key: {
                A: '#c:gems/empowered_restonia',
                B: 'actuallyadditions:display_stand'
            },
            id: `${id_prefix}empowerer`
        },
        {
            output: 'actuallyadditions:display_stand',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'actuallyadditions:ethetic_green_block',
                B: 'industrialforegoing:machine_frame_simple',
                C: 'actuallyadditions:ethetic_white_block',
                D: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}display_stand`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
