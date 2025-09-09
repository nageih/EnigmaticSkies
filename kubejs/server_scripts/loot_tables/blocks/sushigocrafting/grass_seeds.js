// // https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    // event.getGlobalModifiers().forEach((modifier) => {
    //     if (modifier.match(/tallow_from/)) {
    //         // If this breaks, use `removeGlobalModifiers`
    //         event.removeGlobalModifiers(modifier);
    //     }
    // });
    event.removeGlobalModifiers(/sushigocrafting:.*grass_seeds/);
});
