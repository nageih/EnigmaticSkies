// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/crushed_basalt').createPool((pool) => {
        pool.addEntry(LootEntry.of('theurgy:crystallized_lava').setCount(10));
        pool.addEntry(LootEntry.of('minecraft:quartz').setCount(10));
        pool.addEntry(LootEntry.of('malum:blazing_quartz').setCount(10));
    });
});
