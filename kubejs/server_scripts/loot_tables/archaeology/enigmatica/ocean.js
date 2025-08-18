// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/ocean').createPool((pool) => {
        pool.rolls([1, 5]);
        pool.addEntry(LootEntry.of('aquaculture:neptunium_nugget').setCount(10));
        pool.addEntry(LootEntry.of('minecraft:lapis_lazuli').setCount(10));
        pool.addEntry(LootEntry.of('ae2:certus_quartz_crystal').setCount(10));
    });
});
