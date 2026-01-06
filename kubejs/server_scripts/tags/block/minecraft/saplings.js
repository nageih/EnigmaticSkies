ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*sapling/];

    event.get('minecraft:saplings').add(additions);
});
