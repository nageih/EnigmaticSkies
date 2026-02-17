//priority: 900
// https://kubejs.com/wiki/tutorials/block-registry
StartupEvents.registry('block', (event) => {
    const brilliant_dorodangos = [
        'Brilliant Cold Aercloud',
        'Brilliant Smooth Basalt',
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
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool');
    });
});
