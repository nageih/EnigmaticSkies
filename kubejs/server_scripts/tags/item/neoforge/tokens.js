ServerEvents.tags('item', (event) => {
    let additions = {
        water: ['naturesaura:token_grief'],
        air: ['naturesaura:token_euphoria'],
        earth: ['naturesaura:token_terror'],
        fire: ['naturesaura:token_rage']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tokens/${tag}`).add(additions[tag]);
        event.get('c:tokens').add(additions[tag]);
    });
});
