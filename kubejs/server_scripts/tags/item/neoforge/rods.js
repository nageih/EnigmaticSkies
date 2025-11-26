ServerEvents.tags('item', (event) => {
    let additions = {
        andesite_alloy: ['modern_industrialization:andesite_alloy_rod']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:rods/${tag}`).add(additions[tag]);
        event.get('c:rods').add(additions[tag]);
    });
});
