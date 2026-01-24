ServerEvents.tags('item', (event) => {
    let additions = ['#enigmatica:super_hot', '#enigmatica:hot'];

    event.get('mi_tweaks:very_hot').add(additions);
});
