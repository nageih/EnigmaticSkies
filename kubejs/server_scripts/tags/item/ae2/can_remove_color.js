ServerEvents.tags('item', (event) => {
    let additions = ['supplementaries:soap', '#c:buckets/water', 'theurgy:crystallized_water'];
    event.get('ae2:can_remove_color').add(additions);
});
