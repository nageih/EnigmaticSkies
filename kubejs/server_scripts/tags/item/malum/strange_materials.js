ServerEvents.tags('item', (event) => {
    let additions = ['malum:strange_crystal', 'malum:large_strange_crystal', 'malum:strangeroot', 'malum:scarstone'];

    event.get('malum:strange_materials').add(additions);
});
