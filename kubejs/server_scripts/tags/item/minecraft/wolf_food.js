ServerEvents.tags('item', (event) => {
    let additions = ['enigmatica:raw_chicken_cuts'];

    event.get('c:wolf_food').add(additions);
});
