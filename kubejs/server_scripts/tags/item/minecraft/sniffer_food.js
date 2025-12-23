ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:torchflower'];

    event.get(`minecraft:sniffer_food`).add(additions);
});
