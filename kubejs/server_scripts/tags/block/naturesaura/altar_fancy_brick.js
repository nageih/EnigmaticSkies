ServerEvents.tags('block', (event) => {
    let additions = ['minecraft:chiseled_tuff', 'minecraft:chiseled_tuff_bricks'];
    event.get('naturesaura:altar_fancy_brick').add(additions);
});
