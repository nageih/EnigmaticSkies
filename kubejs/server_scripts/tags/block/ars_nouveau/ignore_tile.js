ServerEvents.tags('block', (event) => {
    let additions = [/aether:icestone/];

    event.get(`ars_nouveau:ignore_tile`).add(additions);
});
