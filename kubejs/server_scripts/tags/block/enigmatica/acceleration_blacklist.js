ServerEvents.tags('block', (event) => {
    let additions = [
        'aether:icestone',

        'create:crushing_wheel',
        'create:deployer',
        'create:hose_pulley',
        'create:item_drain',
        'create:mechanical_arm',
        'create:mechanical_drill',
        'create:mechanical_mixer',
        'create:mechanical_press',
        'create:mechanical_pump',
        'create:mechanical_saw',
        'create:millstone',
        'create:rotation_speed_controller',
        'create:spout',

        'trading_floor:trading_depot'
    ];

    event.get(`enigmatica:acceleration_blacklist`).add(additions);
});
