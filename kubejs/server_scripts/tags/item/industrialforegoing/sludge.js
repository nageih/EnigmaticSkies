ServerEvents.tags('item', (event) => {
    let additions = ['farmersdelight:rich_soil', 'minecraft:mud', 'malum:refined_brilliance'];
    let exclusions = ['minecraft:dirt'];

    event.get('industrialforegoing:sludge').add(additions).remove(exclusions);
});
