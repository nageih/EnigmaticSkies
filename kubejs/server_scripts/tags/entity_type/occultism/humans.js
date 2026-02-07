ServerEvents.tags('entity_type', (event) => {
    let additions = [
        'minecraft:wandering_trader',
        'minecraft:witch',
        'minecraft:evoker',
        'minecraft:pillager',
        'minecraft:trophy'
    ];
    event.get('occultism:humans').add(additions);
});
