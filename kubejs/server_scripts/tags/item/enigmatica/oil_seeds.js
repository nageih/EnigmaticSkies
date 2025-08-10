ServerEvents.tags('item', (event) => {
    let additions = [
        'minecraft:beetroot_seeds',
        'minecraft:pumpkin_seeds',
        'minecraft:wheat_seeds',
        'supplementaries:flax_seeds',
        'sushigocrafting:soy_seeds',
        'sushigocrafting:sesame_seeds',
        'actuallyadditions:flax_seeds'
    ];
    event.get('enigmatica:oil_seeds').add(additions);
});
