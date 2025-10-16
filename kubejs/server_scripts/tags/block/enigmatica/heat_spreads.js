ServerEvents.tags('block', (event) => {
    let additions = [
        '#chipped:iron_bars',
        '#create:fan_transparent',
        '#minecraft:leaves',
        'create:encased_fluid_pipe',
        'enderio:dark_steel_bars',
        'enderio:end_steel_bars',
        'farmersdelight:safety_net',
        'minecraft:iron_bars'
    ];
    event.get('enigmatica:heat_spreads').add(additions);
});
