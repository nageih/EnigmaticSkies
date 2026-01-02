ServerEvents.tags('item', (event) => {
    let additions = ['#c:ingots/iridium'];
    event.get('aether:valkyrie_repairing').add(additions);
});
