//priority: 1000
LootJS.lootTables((event) => {
    const types = ['boggy', 'oceanic', 'volcanic'];
    types.forEach((type) => {
        event.create(`enigmatica:archaeology/${type}_dorodango`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls([2, 5]);
            pool.addEntry(LootEntry.of(`enigmatica:${type}_dorodango`));
        });
    });
});
