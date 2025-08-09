// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/archwood_forest').createPool((pool) => {
        pool.addEntry(LootEntry.of('malum:blazing_quartz').setCount(10));
    });
});
