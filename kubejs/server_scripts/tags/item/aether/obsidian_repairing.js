ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:obsidian'];
    event.get('aether:obsidian_repairing').add(additions);
});
