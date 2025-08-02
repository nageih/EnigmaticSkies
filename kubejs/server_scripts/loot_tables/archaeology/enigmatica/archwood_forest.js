// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/crushed_basalt').createPool((pool) => {
        pool.addEntry(LootEntry.of('malum:blazing_quartz').setCount(10));
    });
});
