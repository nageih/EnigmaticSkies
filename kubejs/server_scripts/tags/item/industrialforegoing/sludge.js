ServerEvents.tags('item', (event) => {
    let additions = ['aether:aether_dirt', 'minecraft:mud', 'farmersdelight:rich_soil'];
    let exclusions = ['minecraft:dirt'];

    event.get('industrialforegoing:sludge').add(additions).remove(exclusions);
});
