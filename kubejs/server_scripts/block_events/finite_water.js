ItemEvents.rightClicked((event) => {
    const { item } = event;
    if (item.id == 'minecraft:glass_bottle') event.cancel();
});
