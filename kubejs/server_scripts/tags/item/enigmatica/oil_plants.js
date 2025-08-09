ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot'];
    event.get('enigmatica:oil_plants').add(additions);
});
