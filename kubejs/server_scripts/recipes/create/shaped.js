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
        },
        {
            output: 'create:schematicannon',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'pneumaticcraft:cannon_barrel',
                B: 'create:metal_bracket',
                C: 'create:andesite_casing'
            },
            id: `${id_prefix}schematicannon`
        },
        {
            output: 'create:powered_toggle_latch',
            pattern: [' A ', ' B ', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'minecraft:lever',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}powered_toggle_latch`
        },
        {
            output: 'create:powered_latch',
            pattern: [' A ', 'DBD', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'minecraft:lever',
                C: 'naturesaura:infused_stone',
                D: '#c:dusts/redstone'
            },
            id: `${id_prefix}powered_latch`
        },
        {
            output: 'create:pulse_repeater',
            pattern: ['DBA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'create:precision_mechanism',
                C: 'naturesaura:infused_stone',
                D: '#c:dusts/redstone'
            },
            id: `${id_prefix}pulse_repeater`
        },
        {
            output: 'create:pulse_extender',
            pattern: ['  A', 'DBA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'create:precision_mechanism',
                C: 'naturesaura:infused_stone',
                D: '#c:dusts/redstone'
            },
            id: `${id_prefix}pulse_extender`
        },
        {
            output: 'create:pulse_timer',
            pattern: [' BA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'ars_technica:calibrated_precision_mechanism',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}pulse_timer`
        },
        {
            output: '8x create:crimsite',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:red_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_crimsite`
        },
        {
            output: '8x create:ochrum',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:yellow_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_ochrum`
        },
        {
            output: '8x create:asurine',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:light_blue_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_asurine`
        },
        {
            output: '8x create:veridium',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:lime_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_veridium`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
