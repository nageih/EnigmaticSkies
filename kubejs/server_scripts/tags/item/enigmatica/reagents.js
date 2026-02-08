ServerEvents.tags('item', (event) => {
    let additions = {
        darkness: ['ars_nouveau:ritual_moonfall'],
        sunshine: ['ars_nouveau:ritual_sunrise']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`enigmatica:reagents/${tag}`).add(additions[tag]);
        event.get('enigmatica:reagents').add(additions[tag]);
    });
});
