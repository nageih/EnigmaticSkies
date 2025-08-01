// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/sand').createPool((pool) => {
        // pool.addEntry(LootEntry.of('ftbquests:lootcrate[ftbquests:loot_crate="alakarkinos_sand"]'));
        pool.addEntry(LootEntry.of('createsifter:raw_zinc_piece').setCount(10));
        pool.addEntry(LootEntry.of('createsifter:raw_tin_piece').setCount(10));
        pool.addEntry(LootEntry.of('minecraft:prismarine_shard').setCount(10));
        pool.addEntry(LootEntry.of('minecraft:prismarine_crystals').setCount(10));
        pool.addEntry(LootEntry.of('ae2:certus_quartz_crystal').setCount(10));
    });
});
