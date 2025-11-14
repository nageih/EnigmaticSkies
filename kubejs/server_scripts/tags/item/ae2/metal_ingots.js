ServerEvents.tags('item', (event) => {
    let additions = ['#c:ingots/compressed_iron'];
    event.get('ae2:metal_ingots').removeAll().add(additions);
});
