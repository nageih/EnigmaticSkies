ServerEvents.tags('item', (event) => {
    let additions = ['ars_elemental:spore_blossom_up', 'minecraft:spore_blossom'];
    event.get('enigmatica:spore_blossoms').add(additions);
});
