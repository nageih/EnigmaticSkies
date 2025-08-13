ServerEvents.tags('item', (event) => {
    let additions = {
        wheat: ['farmersdelight:wheat_dough', 'create:dough'],
        rice: ['actuallyadditions:rice_dough'],
        sour: ['pneumaticcraft:sourdough']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:doughs/${tag}`).add(additions[tag]);
        event.get('c:doughs').add(additions[tag]);
    });
});
