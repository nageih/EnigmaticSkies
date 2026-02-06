ServerEvents.tags('item', (event) => {
    let additions = [`oritech:wither_crop_block`];

    event.get(`extended_industrialization:farmer_plantable`).add(additions);
});
