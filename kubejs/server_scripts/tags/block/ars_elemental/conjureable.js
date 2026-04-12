ServerEvents.tags('block', (event) => {
    let additions = {
        dirt: [
            'minecraft:dirt',
            'minecraft:coarse_dirt',
            'minecraft:podzol',
            'minecraft:mycelium',
            'minecraft:grass_block',
            'minecraft:gravel',
            'farmersdelight:rich_soil'
        ],
        cobble: [
            'minecraft:cobblestone',
            'arts_and_crafts:cobbled_verdant_pietraforte',
            'arts_and_crafts:cobbled_marlot_pietraforte',
            'arts_and_crafts:cobbled_hazel_pietraforte',
            'arts_and_crafts:cobbled_umber_pietraforte',
            'arts_and_crafts:cobbled_jet_pietraforte',
            'arts_and_crafts:cobbled_beige_pietraforte',
            'arts_and_crafts:cobbled_ochre_pietraforte',
            'arts_and_crafts:cobbled_ivory_pietraforte'
        ],
        stone: [
            'minecraft:diorite',
            'minecraft:andesite',
            'minecraft:granite',
            'minecraft:tuff',
            'minecraft:calcite',
            'minecraft:blackstone',
            'arts_and_crafts:verdant_pietraforte',
            'arts_and_crafts:marlot_pietraforte',
            'arts_and_crafts:hazel_pietraforte',
            'arts_and_crafts:umber_pietraforte',
            'arts_and_crafts:jet_pietraforte',
            'arts_and_crafts:beige_pietraforte',
            'arts_and_crafts:ochre_pietraforte',
            'arts_and_crafts:ivory_pietraforte',
            'arts_and_crafts:soapstone',
            'arts_and_crafts:gypsum',
            'create:limestone',
            'create:crimsite',
            'create:ochrum',
            'create:veridium',
            'create:asurine'
        ],
        sand: ['minecraft:sand', 'minecraft:red_sand']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`ars_elemental:conjureable/${tag}`).add(additions[tag]);
    });
});
