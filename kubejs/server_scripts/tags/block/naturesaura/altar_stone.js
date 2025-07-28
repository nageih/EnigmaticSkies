ServerEvents.tags('block', (event) => {
    let additions = ['minecraft:tuff_bricks'];
    event.get('naturesaura:altar_stone').add(additions);
});
