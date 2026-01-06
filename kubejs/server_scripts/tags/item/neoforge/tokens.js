ServerEvents.tags('item', (event) => {
    let additions = {
        greater_water: ['naturesaura:token_grief'],
        greater_air: ['naturesaura:token_euphoria'],
        greater_earth: ['naturesaura:token_terror'],
        greater_fire: ['naturesaura:token_rage'],

        water: ['naturesaura:token_sorrow'],
        air: ['naturesaura:token_joy'],
        earth: ['naturesaura:token_fear'],
        fire: ['naturesaura:token_anger']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tokens/${tag}`).add(additions[tag]);
        event.get('c:tokens').add(additions[tag]);
    });
});
