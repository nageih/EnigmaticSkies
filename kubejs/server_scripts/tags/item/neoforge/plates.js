ServerEvents.tags('item', (event) => {
    let additions = {
        plastic: ['pneumaticcraft:plastic', 'oritech:plastic_sheet', 'industrialforegoing:plastic']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:plates/${tag}`).add(additions[tag]);
        event.get('c:plates').add(additions[tag]);
    });
});
