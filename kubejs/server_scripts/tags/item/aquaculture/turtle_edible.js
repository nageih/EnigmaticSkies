ServerEvents.tags('item', (event) => {
    let additions = ['oritech:banana', 'minecraft:glow_berries', 'aether:blue_berry'];
    event.get('aquaculture:turtle_edible').add(additions);
});
