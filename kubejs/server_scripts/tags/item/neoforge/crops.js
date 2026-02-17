ServerEvents.tags('item', (event) => {
    let exclusions = {
        flax: ['actuallyadditions:flax_seeds']
    };

    Object.keys(exclusions).forEach((tag) => {
        event.get(`c:crops/${tag}`).remove(exclusions[tag]);
        event.get('c:crops').remove(exclusions[tag]);
    });

    let additions = {
        soul_flower: ['oritech:wither_crop_block']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:crops/${tag}`).add(additions[tag]);
        event.get('c:crops').add(additions[tag]);
    });
});
