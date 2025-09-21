ServerEvents.tags('entity_type', (event) => {
    let additions = ['aether:aerbunny', 'aether:flying_cow', 'aether:phyg', 'aether:sheepuff'];
    event.get('supplementaries:eats_fodder').add(additions);
});
