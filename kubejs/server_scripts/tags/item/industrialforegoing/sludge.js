ServerEvents.tags('item', (event) => {
    let additions = [
        'aether:aether_dirt',
        'minecraft:mud',
        'farmersdelight:rich_soil',
        'create:crimsite',
        'create:ochrum',
        'create:veridium',
        'create:asurine',
        'arts_and_crafts:soapstone',
        'arts_and_crafts:gypsum',
        'create:limestone'
    ];
    let exclusions = ['minecraft:dirt'];

    event.get('industrialforegoing:sludge').add(additions).remove(exclusions);
});
