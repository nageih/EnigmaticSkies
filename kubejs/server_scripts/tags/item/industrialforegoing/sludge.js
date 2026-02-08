ServerEvents.tags('item', (event) => {
    let additions = [
        'aether:aether_dirt',
        'arts_and_crafts:cobbled_ochre_pietraforte',
        'arts_and_crafts:cobbled_verdant_pietraforte',
        'arts_and_crafts:gypsum',
        'arts_and_crafts:soapstone',
        'create:asurine',
        'create:crimsite',
        'create:limestone',
        'create:ochrum',
        'create:veridium',
        'farmersdelight:rich_soil',
        'minecraft:mud',
        'malum:refined_brilliance'
    ];
    let exclusions = ['minecraft:dirt'];

    event.get('industrialforegoing:sludge').add(additions).remove(exclusions);
});
