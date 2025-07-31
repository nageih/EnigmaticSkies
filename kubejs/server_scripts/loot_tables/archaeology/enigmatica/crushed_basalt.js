// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/crushed_basalt').createPool((pool) => {
        pool.rolls([9, 15]);
        pool.addEntry(LootEntry.of('theurgy:crystallized_lava').setCount([3, 5]));
        pool.addEntry(LootEntry.of('minecraft:quartz').setCount([3, 5]));
    });
});
