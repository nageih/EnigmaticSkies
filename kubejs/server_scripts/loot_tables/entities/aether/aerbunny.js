// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('aether:entities/aerbunny').createPool((pool) => {
        pool.addEntry(LootEntry.reference('minecraft:entities/rabbit'));
    });
});
