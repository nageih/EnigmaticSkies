// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:statue_tokens/witch').createPool((pool) => {
        pool.addEntry(LootEntry.of('naturesaura:token_grief').killedByPlayer());
    });

    event.create('enigmatica:statue_tokens/evoker').createPool((pool) => {
        pool.addEntry(LootEntry.of('naturesaura:token_euphoria').killedByPlayer());
    });

    event.create('enigmatica:statue_tokens/vindicator').createPool((pool) => {
        pool.addEntry(LootEntry.of('naturesaura:token_rage').killedByPlayer());
    });

    event.create('enigmatica:statue_tokens/pillager').createPool((pool) => {
        pool.addEntry(LootEntry.of('naturesaura:token_terror').killedByPlayer());
    });
});
