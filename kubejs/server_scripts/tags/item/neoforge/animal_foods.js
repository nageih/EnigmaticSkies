ServerEvents.tags('item', (event) => {
    let additions = ['enigmatica:raw_chicken_cuts'];

    event.get('c:animal_foods').add(additions);
});
