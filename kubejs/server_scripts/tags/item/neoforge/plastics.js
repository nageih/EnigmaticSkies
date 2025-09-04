ServerEvents.tags('item', (event) => {
    let additions = ['pneumaticcraft:plastic', 'oritech:plastic_sheet', 'industrialforegoing:plastic'];

    event.get('c:plastics').add(additions);
});
