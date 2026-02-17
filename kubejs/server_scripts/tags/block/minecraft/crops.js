ServerEvents.tags('block', (event) => {
    let additions = ['oritech:wither_crop_block'];

    event.get('minecraft:crops').add(additions);
});
