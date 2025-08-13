ServerEvents.tags('item', (event) => {
    let additions = {
        wheat: ['pneumaticcraft:wheat_flour', 'enderio:flour']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:flours/${tag}`).add(additions[tag]);
        event.get('c:flours').add(additions[tag]);
    });

    event.get('c:dusts/flour').removeAll();
});
