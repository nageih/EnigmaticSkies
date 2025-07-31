// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/sand').createPool((pool) => {
        pool.addEntry(LootEntry.of('ftbquests:lootcrate[ftbquests:loot_crate="alakarkinos_sand"]'));
    });
});
