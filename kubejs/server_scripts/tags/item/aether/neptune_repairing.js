ServerEvents.tags('item', (event) => {
    let additions = ['#c:essences/water'];
    event.get('aether:neptune_repairing').add(additions);
});
