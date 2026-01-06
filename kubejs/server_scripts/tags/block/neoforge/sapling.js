ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*sapling/];

    event.get('c:sapling').add(additions);
});
