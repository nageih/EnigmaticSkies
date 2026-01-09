ServerEvents.tags('item', (event) => {
    let additions = {
        milk: ['aether:skyroot_milk_bucket'],
        raw_chicken: ['enigmatica:raw_chicken_cuts'],
        raw_meat: ['enigmatica:raw_chicken_cuts']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:foods/${tag}`).add(additions[tag]);
        event.get('c:foods').add(additions[tag]);
    });
});
