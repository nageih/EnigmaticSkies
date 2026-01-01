ServerEvents.tags('item', (event) => {
    let additions = ['#c:essences/fire'];
    event.get('aether:phoenix_repairing').add(additions);
});
