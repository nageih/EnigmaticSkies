ServerEvents.tags('item', (event) => {
    let additions = {
        plastic: ['pneumaticcraft:plastic', 'oritech:plastic_sheet', 'industrialforegoing:plastic'],
        andesite_alloy: ['modern_industrialization:andesite_alloy_plate'],
        sky: ['modern_industrialization:sky_plate'],
        reinforced_carbon: ['oritech:reinforced_carbon_sheet']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:plates/${tag}`).add(additions[tag]);
        event.get('c:plates').add(additions[tag]);
    });
});
