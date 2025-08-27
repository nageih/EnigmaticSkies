ServerEvents.tags('item', (event) => {
    let additions = Object.keys(armor_insulation);

    event.get('enigmatica:insulation').add(additions);
});
