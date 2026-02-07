ServerEvents.tags('block', (event) => {
    let additions = {
        greatly_likes: [
            'minecraft:melon',
            'minecraft:pumpkin',
            'naturesaura:aura_bloom',
            'naturesaura:aura_cactus',
            'naturesaura:warped_aura_mushroom',
            'naturesaura:crimson_aura_mushroom',
            'naturesaura:aura_mushroom',
            'arts_and_crafts:lotus_flower'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`ars_nouveau:whirlisprig/${tag}`).add(additions[tag]);
    });
});
