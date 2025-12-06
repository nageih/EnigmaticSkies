// https://docs.almostreliable.com/lootjs/

LootJS.lootTables((event) => {
    event.getLootTable('minecraft:entities/villager').firstPool((pool) => {
        pool.rolls(8);
        pool.addEntry(
            LootEntry.of('supplementaries:ash')
                .setCount([0, 1])
                .applyEnchantmentBonus([0, 1])
                .matchAttackerCustom((attacker) => attacker.uuid.toString() != DRYGMY_UUID)
        );
    });
});
