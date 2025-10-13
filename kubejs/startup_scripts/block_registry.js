//priority: 900
// https://kubejs.com/wiki/tutorials/block-registry
StartupEvents.registry('block', (event) => {
    // event
    //     .create(`deepslate_quartz_ore`)
    //     .hardness(3.0)
    //     .resistance(3.0)
    //     .displayName(`Deepslate Quartz Ore`)
    //     .soundType('stone')
    //     .tagBlock('c:ores')
    //     .tagBlock('c:ores/quartz')
    //     .tagBlock('c:ore_rates/singular')
    //     .tagBlock('minecraft:mineable/pickaxe');

    // const resource_nodes = [
    //     'antimony',
    //     'bauxite',
    //     'iridium',
    //     'lead',
    //     'lignite',
    //     'monazite',
    //     'salt',
    //     'tin',
    //     'tungsten',
    //     'uraninite',
    //     'uranium',
    //     'silver',
    //     'quartz'
    // ];

    // resource_nodes.forEach((node) => {
    //     event
    //         .create(`resource_node_${node}`)
    //         .displayName(`${properCase(node)} Resource Node`)
    //         .soundType('stone')
    //         .unbreakable()
    //         .tagBlock('oritech:resource_nodes');
    // });

    const brilliant_dorodangos = [
        'Brilliant Cold Aercloud',
        'Brilliant Crushed Basalt',
        'Brilliant Golden Aercloud',
        'Brilliant Mud',
        'Brilliant Salt',
        'Brilliant Sand',
        'Brilliant Sculk'
    ];

    brilliant_dorodangos.forEach((block) => {
        event
            .create(`enigmatica:${getID(block)}`)
            .displayName(`${block}`)
            .soundType('grass')
            .tagBlock('enigmatica:dorodangos')
            .tagBlock(`enigmatica:dorodangos/${getID(block)}`)
            .tagBlock('minecraft:mineable/pickaxe');
    });
});
