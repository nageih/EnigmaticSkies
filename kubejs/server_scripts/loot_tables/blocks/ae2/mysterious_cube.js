// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event
        .addTableModifier('ae2:blocks/mysterious_cube')
        .removeLoot(ItemFilter.ANY)
        .addLoot(LootEntry.of('ae2:mysterious_cube'));
});
